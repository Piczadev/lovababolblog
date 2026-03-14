import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    readTime: "6 min",
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
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-semibold mb-2"
            >
              Blog
            </motion.h2>
            <p className="text-muted-foreground text-sm">Artículos sobre Web3, AI y desarrollo</p>
          </div>
          <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group">
            Ver todos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass-card p-5 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
