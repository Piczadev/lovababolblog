import { motion } from "framer-motion";

const education = [
  { title: "Ingeniería en Sistemas Computacionales", place: "IBERO Puebla", year: "2021" },
  { title: "Desarrollo Web & Diseño Frontend", place: "Ironhack", year: "2021" },
  { title: "Blockchain Developer Certification", place: "Solana Foundation", year: "2024" },
];

const languages = [
  { lang: "Español", level: "Nativo" },
  { lang: "Inglés", level: "Avanzado (C1)" },
  { lang: "Alemán", level: "Básico" },
];

const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold mb-6"
        >
          Educación
        </motion.h2>

        <div className="space-y-4 mb-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-baseline justify-between gap-4"
            >
              <div>
                <p className="text-sm font-medium">{ed.title}</p>
                <p className="text-xs text-muted-foreground">{ed.place}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono shrink-0">{ed.year}</span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold mb-4"
        >
          Idiomas
        </motion.h2>

        <div className="flex gap-4">
          {languages.map((l) => (
            <div key={l.lang} className="text-sm">
              <span className="font-medium">{l.lang}</span>
              <span className="text-muted-foreground"> · {l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
