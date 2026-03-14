import { motion } from "framer-motion";

const experiences = [
  {
    title: "Fundador, CEO & AI Automation Lead",
    company: "PiczaLabs",
    period: "Nov 2023 – Presente",
    bullets: [
      "Diseñé y desplegué agentes de soporte automatizados para Discord/Telegram con OpenAI API, reduciendo moderación manual un 70%.",
      "Definí la hoja de ruta para 3 dApps Web3, reduciendo el ciclo de desarrollo un 25%.",
      "Arquitecté la comunidad oficial con retención de usuarios 40% superior al promedio.",
    ],
  },
  {
    title: "Tech Content Creator & Producer",
    company: "YouTube & Medios Digitales",
    period: "Sep 2020 – Presente",
    bullets: [
      "Diseñé sistema de producción distribuida con OBS Studio + NDI, latencia cero.",
      "Escalé canal educativo a +50,000 suscriptores, autoridad técnica en Latam.",
    ],
  },
  {
    title: "Blockchain Developer & PM",
    company: "TON Network (Tonstarter)",
    period: "Abr 2024 – Nov 2024",
    bullets: [
      "Gestioné aplicación de IDOs procesando >$500K USD.",
      "Contribuí al lanzamiento de Fragment API, mejorando interoperabilidad un 30%.",
    ],
  },
  {
    title: "Blockchain Intern & HFT Operator",
    company: "Solana Labs",
    period: "2024",
    bullets: [
      "Operé como HFT gestionando TVT de $33,722 USD con eficiencia de gas del 0.17%.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold mb-6"
        >
          Experiencia
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-sm font-semibold">{exp.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-secondary-foreground pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
