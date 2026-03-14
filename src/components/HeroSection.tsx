import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpeg";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <img
            src={avatar}
            alt="Yahir Rivera Flores"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Yahir Rivera Flores
            </h1>
            <p className="text-muted-foreground mt-1">
              Arquitecto de Sistemas Web3 · CEO de PiczaLabs
            </p>
          </div>

          <p className="text-secondary-foreground leading-relaxed">
            Desarrollador de Software y Estratega Digital especializado en Arquitectura Blockchain (Solana/TON) e Ingeniería de IA Aplicada. 
            Fusiono desarrollo técnico con orquestación avanzada de modelos de IA para automatizar flujos complejos. 
            Experto en Prompt Engineering y despliegue de modelos locales (Llama/Ollama), capitalizo el Hiperfoco para construir sistemas que integran código, IA y producción multimedia.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="px-2.5 py-1 rounded-md bg-secondary font-mono text-xs">Puebla, México</span>
            <span className="px-2.5 py-1 rounded-md bg-secondary font-mono text-xs">25 años</span>
            <span className="px-2.5 py-1 rounded-md bg-secondary font-mono text-xs">piczadev.eth</span>
            <span className="px-2.5 py-1 rounded-md bg-secondary font-mono text-xs">pizzalabs.sol</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
