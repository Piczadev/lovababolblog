const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/twitch';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const TWITCH_API_KEY = Deno.env.get('TWITCH_API_KEY');
  if (!TWITCH_API_KEY) {
    return new Response(JSON.stringify({ error: 'TWITCH_API_KEY not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { login } = await req.json();

    const headers = {
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': TWITCH_API_KEY,
    };

    // Get user info
    const userRes = await fetch(`${GATEWAY_URL}/helix/users?login=${encodeURIComponent(login)}`, {
      headers,
    });
    const userData = await userRes.json();
    if (!userRes.ok) {
      throw new Error(`Twitch users API failed [${userRes.status}]: ${JSON.stringify(userData)}`);
    }

    const user = userData.data?.[0] || null;

    // Get stream info
    const streamRes = await fetch(`${GATEWAY_URL}/helix/streams?user_login=${encodeURIComponent(login)}`, {
      headers,
    });
    const streamData = await streamRes.json();
    if (!streamRes.ok) {
      throw new Error(`Twitch streams API failed [${streamRes.status}]: ${JSON.stringify(streamData)}`);
    }

    const stream = streamData.data?.[0] || null;

    return new Response(JSON.stringify({ user, stream }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Twitch API error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
