import { motion } from "framer-motion";
import { Tv, ExternalLink, Users, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface TwitchUser {
  display_name: string;
  profile_image_url: string;
  description: string;
  view_count: number;
}

interface TwitchStream {
  title: string;
  game_name: string;
  viewer_count: number;
  thumbnail_url: string;
  started_at: string;
}

const TWITCH_LOGIN = "piczadev";

const TwitchSection = () => {
  const [user, setUser] = useState<TwitchUser | null>(null);
  const [stream, setStream] = useState<TwitchStream | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTwitch = async () => {
      try {
        const { data, error: fnError } = await supabase.functions.invoke("twitch-status", {
          body: { login: TWITCH_LOGIN },
        });
        if (fnError) throw fnError;
        setUser(data.user);
        setStream(data.stream);
      } catch (e: any) {
        console.error("Twitch fetch error:", e);
        setError("No se pudo cargar el estado de Twitch");
      } finally {
        setLoading(false);
      }
    };
    fetchTwitch();
    const interval = setInterval(fetchTwitch, 60000);
    return () => clearInterval(interval);
  }, []);

  const isLive = !!stream;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 glow-border overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Tv className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-xl font-semibold">Twitch</h2>
              <p className="text-xs text-muted-foreground">
                {isLive ? "🔴 En vivo ahora" : "Offline"}
              </p>
            </div>
            {isLive && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-medium animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500" /> LIVE
              </span>
            )}
          </div>

          {loading ? (
            <div className="rounded-lg bg-secondary/50 p-8 text-center">
              <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Cargando estado de Twitch...</p>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-secondary/50 p-8 text-center">
              <Tv className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* User info */}
              {user && (
                <div className="flex items-center gap-4">
                  <img
                    src={user.profile_image_url}
                    alt={user.display_name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{user.display_name}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{user.description}</p>
                  </div>
                  <a
                    href={`https://twitch.tv/${TWITCH_LOGIN}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-purple-500/15 text-purple-400 text-sm font-medium hover:bg-purple-500/25 transition-colors flex items-center gap-2"
                  >
                    Visitar <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Stream info */}
              {isLive && stream && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="rounded-lg bg-secondary/50 p-4"
                >
                  <p className="text-sm font-medium mb-1">{stream.title}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {stream.viewer_count.toLocaleString()} viewers
                    </span>
                    <span>{stream.game_name}</span>
                  </div>
                </motion.div>
              )}

              {!isLive && (
                <div className="rounded-lg bg-secondary/50 p-6 text-center">
                  <p className="text-sm text-muted-foreground">No estoy en vivo ahora, ¡pero sígueme para saber cuándo empiezo!</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TwitchSection;
