import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";

const education = [
  { title: "Ingeniería en Sistemas Computacionales", place: "IBERO Puebla", year: "2021" },
  { title: "Desarrollo Web & Diseño Frontend", place: "Ironhack", year: "2021" },
  { title: "Blockchain Developer Certification", place: "Solana Foundation", year: "2024" },
];

const languages = [
  { lang: "Español", level: "Nativo", pct: 100 },
  { lang: "Inglés", level: "Avanzado (C1)", pct: 85 },
  { lang: "Alemán", level: "Básico", pct: 25 },
];

const EducationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl font-semibold">Educación</h2>
            </motion.div>

            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{ed.title}</p>
                      <p className="text-xs text-primary/80">{ed.place}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono shrink-0">{ed.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <Languages className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl font-semibold">Idiomas</h2>
            </motion.div>

            <div className="space-y-4">
              {languages.map((l, i) => (
                <motion.div
                  key={l.lang}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="glass-card p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{l.lang}</span>
                    <span className="text-xs text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
