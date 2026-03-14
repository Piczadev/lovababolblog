import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import avatar from "@/assets/avatar.jpeg";
import imgcode from "@/assets/imgcode.svg";

/**
 * HeroSection Component
 * 
 * Sección principal inmersiva (Pantalla Completa - 100vh).
 * Presenta el avatar del usuario, saludo principal interactivo, y
 * animaciones declarativas de entrada (framer-motion) complementadas
 * con adornos SVG (`imgcode`) suspendidos en el fondo.
 */
const HeroSection = () => {
  return (
    <section id="hero" className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background pattern / subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-background to-background pointer-events-none" />

      {/* Subtle Floating Code SVG Decoration */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[15%] -right-16 md:right-10 lg:right-32 w-full max-w-[280px] md:max-w-md lg:max-w-lg opacity-60 mix-blend-screen pointer-events-none z-0"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1)) drop-shadow(0 0 20px rgba(111, 44, 255, 0.6))"
        }}
      >
        <img src={imgcode} alt="Code Snippet Decoration" className="w-full h-auto object-contain" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-2 group"
        >
          {/* Subtle glow behind the avatar */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors duration-500" />
          {/* Avatar container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-border/50 overflow-hidden bg-background shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500">
            <img src={avatar} alt="Yahir Rivera Flores" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground"
        >
          Yahir Rivera <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/50">Flores</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xl md:text-2xl text-muted-foreground tracking-wide font-light"
        >
          CEO de PizzaLabs - Arquitecto Web3 & IA
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 opacity-70" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
