import { motion } from "framer-motion";

const categories = [
  { title: "Blockchain & Web3", skills: ["Solana", "TON", "Ethereum", "Solidity", "Smart Contracts", "DeFi", "Gas Optimization"] },
  { title: "Full-Stack", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "React.js", "Next.js", "Node.js", "Rust"] },
  { title: "AI & Automatización", skills: ["Prompt Engineering", "LLM Orchestration", "Ollama", "OpenAI API", "LangChain", "Raycast AI", "n8n"] },
  { title: "Multimedia", skills: ["OBS Studio (NDI)", "Adobe Premiere", "Producción Multicámara"] },
];

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-semibold mb-2"
        >
          Skills
        </motion.h2>
        <p className="text-muted-foreground text-sm mb-8">Tecnologías y herramientas que domino</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5"
            >
              <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
