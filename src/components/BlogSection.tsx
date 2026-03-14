import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Arquitectura de Smart Contracts en Solana: Guía Completa",
    excerpt: "Un deep-dive en el modelo de cuentas de Solana y cómo diseñar contratos eficientes usando Anchor.",
    date: "Mar 2026",
    tags: ["Solana", "Smart Contracts"],
  },
  {
    title: "Orquestación de LLMs para Automatización de Workflows",
    excerpt: "Cómo construí un sistema de agentes AI que gestiona tareas de desarrollo de forma autónoma.",
    date: "Feb 2026",
    tags: ["AI", "Automation"],
  },
  {
    title: "De 0 a $33K TVT: Mi experiencia en HFT con Solana",
    excerpt: "Lecciones aprendidas gestionando protocolos de alta frecuencia en blockchain.",
    date: "Ene 2026",
    tags: ["DeFi", "HFT"],
  },
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="flex items-baseline justify-between mb-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold"
          >
            Blog
          </motion.h2>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-1">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex items-baseline justify-between gap-4 py-3 hover:bg-secondary -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
            >
              <div className="min-w-0">
                <h3 className="text-sm font-medium group-hover:text-foreground transition-colors truncate">
                  {post.title}
                </h3>
                <div className="flex gap-1.5 mt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-mono shrink-0">{post.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
