import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Solidity", "Rust"],
  },
  {
    title: "FRAMEWORKS & TOOLS",
    skills: ["React.js", "Next.js", "Node.js", "Anchor (Solana)", "Hardhat"],
  },
  {
    title: "BLOCKCHAIN",
    skills: ["Solana", "TON", "Ethereum", "Smart Contracts", "DeFi"],
  },
  {
    title: "AI & AUTOMATION",
    skills: ["Prompt Engineering", "LLM Orchestration", "Ollama", "LangChain"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted-foreground tracking-wider mb-10"
        >
          // SKILLS & PROFICIENCY
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-mono text-[10px] tracking-wider text-accent mb-4">
                ✦ {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md border border-border bg-secondary text-sm text-secondary-foreground font-mono"
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
