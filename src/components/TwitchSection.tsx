import { motion } from "framer-motion";
import { Tv, ExternalLink } from "lucide-react";

const TwitchSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 glow-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Tv className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">Twitch</h2>
              <p className="text-xs text-muted-foreground">Conecta Twitch para ver el estado en vivo</p>
            </div>
          </div>

          <div className="rounded-lg bg-secondary/50 p-8 text-center">
            <Tv className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Integración de Twitch pendiente</p>
            <p className="text-xs text-muted-foreground">Conecta tu cuenta de Twitch para mostrar tu estado de streaming en vivo.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwitchSection;
