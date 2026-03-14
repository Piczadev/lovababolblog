import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpeg";
import { MapPin, Briefcase, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative">
              <img
                src={avatar}
                alt="Yahir Rivera Flores"
                className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover glow-border"
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-background animate-pulse-warm" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 space-y-5"
          >
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Yahir Rivera
                <span className="text-gradient"> Flores</span>
              </h1>
              <p className="text-primary font-medium mt-2 text-lg">
                CEO de PiczaLabs · Arquitecto Web3
              </p>
            </div>

            <p className="text-secondary-foreground leading-relaxed max-w-xl">
              Desarrollador especializado en Arquitectura Blockchain (Solana/TON) e Ingeniería de IA Aplicada. 
              Fusiono desarrollo técnico con orquestación de modelos de IA para automatizar flujos complejos.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs text-secondary-foreground">
                <MapPin className="w-3 h-3 text-primary" /> Puebla, México
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs text-secondary-foreground">
                <Briefcase className="w-3 h-3 text-primary" /> 25 años
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary font-mono text-xs text-primary">
                <Code className="w-3 h-3" /> piczadev.eth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary font-mono text-xs text-primary">
                <Code className="w-3 h-3" /> pizzalabs.sol
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
