import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Arquitectura de Smart Contracts en Solana: Guía Completa",
    excerpt: "Un deep-dive en el modelo de cuentas de Solana y cómo diseñar contratos eficientes usando Anchor.",
    date: "Mar 2026",
    tags: ["Solana", "Smart Contracts"],
    readTime: "8 min",
  },
  {
    title: "Orquestación de LLMs para Automatización de Workflows",
    excerpt: "Cómo construí un sistema de agentes AI que gestiona tareas de desarrollo de forma autónoma.",
    date: "Feb 2026",
    tags: ["AI", "Automation"],
    readTime: "12 min",
  },
  {
    title: "De 0 a $33K TVT: Mi experiencia en HFT con Solana",
    excerpt: "Lecciones aprendidas gestionando protocolos de alta frecuencia en blockchain.",
    date: "Ene 2026",
    tags: ["DeFi", "HFT"],
    readTime: "10 min",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted-foreground tracking-wider"
          >
            // ÚLTIMOS ARTÍCULOS
          </motion.h2>
          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1 font-mono">
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 card-hover cursor-pointer flex flex-col"
            >
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span className="text-border">|</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
