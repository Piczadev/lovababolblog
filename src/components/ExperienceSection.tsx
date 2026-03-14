import { motion } from "framer-motion";
import { Building2, Code2, TrendingUp, Youtube, Calendar } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    title: "Fundador & CEO",
    company: "PiczaLabs",
    period: "Nov 2023 – Presente",
    bullets: [
      "Lideré el desarrollo de 3 dApps Web3, impulsando la adopción un 40% en Q1.",
      "Aceleré el ciclo de desarrollo un 25% mediante marcos de priorización ágiles.",
      "Definición de hoja de ruta estratégica y visión de producto a largo plazo.",
    ],
  },
  {
    icon: Code2,
    title: "Blockchain Dev & PM",
    company: "TON Network (Tonstarter)",
    period: "Abr 2024 – Nov 2024",
    bullets: [
      "Diseñé sistema de IDOs procesando >$500K USD en el primer mes.",
      "Contribuí al lanzamiento de Fragment API, mejorando interoperabilidad un 30%.",
      "Desarrollo de contratos seguros en Solidity y optimización de gas.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Blockchain Intern / HFT",
    company: "Solana Labs",
    period: "2024",
    bullets: [
      "Gestioné $33,722 USD TVT con eficiencia de gas del 0.17%.",
      "Micro-optimización de protocolos de alta frecuencia.",
      "Creación de dApp con gamificación que incrementó engagement un 35%.",
    ],
  },
  {
    icon: Youtube,
    title: "Content Creator",
    company: "YouTube / Tech Community",
    period: "Sep 2020 – Presente",
    bullets: [
      "Comunidad de >50k suscriptores en tecnología y criptomonedas.",
      "Contenido educativo sobre desarrollo blockchain y Web3.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted-foreground tracking-wider mb-10"
        >
          // IMPACTO CUANTIFICADO EN WEB3 Y TECNOLOGÍA
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <exp.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="font-mono text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                        <span className="text-muted-foreground mt-1.5">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
