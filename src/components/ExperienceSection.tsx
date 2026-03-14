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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-semibold mb-2"
        >
          Experiencia
        </motion.h2>
        <p className="text-muted-foreground text-sm mb-8">Mi trayectoria profesional en tech y Web3</p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-xs text-primary/80 font-medium">{exp.company}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono px-2 py-1 rounded bg-secondary shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-secondary-foreground pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
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
