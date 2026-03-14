import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, MessageCircle, Terminal } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", handle: "@piczadev", href: "https://github.com/piczadev" },
  { icon: Linkedin, label: "LinkedIn", handle: "Yahir Rivera", href: "https://linkedin.com/in/yahir-rivera" },
  { icon: Youtube, label: "YouTube", handle: "@piczadev0s", href: "https://youtube.com/@piczadev0s" },
  { icon: MessageCircle, label: "Telegram", handle: "@PiczaDev", href: "https://t.me/PiczaDev" },
  { icon: Mail, label: "Email", handle: "contacto", href: "mailto:contact@piczadev.com" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Name & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8 glow-primary">
              <span className="status-dot" />
              <span className="font-mono text-xs text-primary tracking-wider">
                SYSTEM ONLINE: HIGH PERFORMANCE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-2">
              Yahir Rivera
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-gradient-primary mb-6">
              Flores
            </h1>

            <p className="text-lg text-secondary-foreground mb-2">
              Arquitecto de Sistemas Web3 & CEO de PiczaLabs.
            </p>
            <p className="font-mono text-sm text-primary/80 mb-8">
              "Un Sistema Operativo Especializado para la Innovación."
            </p>

            <div className="flex gap-3 mb-10">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:glow-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Terminal, label: "ROLE", value: "Blockchain Arch." },
                { icon: Terminal, label: "FOCUS", value: "Solana / TON" },
                { icon: Terminal, label: "TVT MANAGED", value: "$33k+ (HFT)" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-lg border border-border bg-card card-hover"
                >
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{stat.label}</span>
                  <p className="text-sm font-semibold mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <h2 className="font-mono text-xs text-muted-foreground tracking-wider mb-6">
              // PROFESSIONAL PROFILE
            </h2>
            <div className="space-y-4 text-secondary-foreground leading-relaxed text-[15px]">
              <p>
                Software Developer and Digital Strategist specializing in{" "}
                <span className="text-primary font-mono text-sm">Blockchain Architecture (Solana/TON)</span> and{" "}
                <span className="text-accent font-mono text-sm">Applied AI Engineering</span>.
              </p>
              <p>
                My profile is defined by a "High-Performance Engineering" mindset, fusing technical development with
                the advanced orchestration of AI models (LLMs) to automate complex workflows.
              </p>
              <p>
                Expert in Prompt Engineering and Local Model Deployment (Llama/Ollama), I capitalize on{" "}
                <span className="text-accent font-mono text-sm">Hyperfocus (ADHD)</span> to build systems that
                integrate code, AI, and multimedia production (OBS NDI), transforming technical complexity into
                scalable products, high-impact content, and loyal communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
