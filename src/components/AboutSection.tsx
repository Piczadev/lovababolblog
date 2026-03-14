import { motion } from "framer-motion";
import { MapPin, User, Code2 } from "lucide-react";

import { experienceData } from "@/data/config";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-6 relative w-full overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">Sobre Mí & CV</h2>
                    <div className="h-px bg-border w-full mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Column 1: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Mi enfoque técnico se centra en la resolución de problemas complejos mediante la intersección de tecnologías descentralizadas (Web3) e Inteligencia Artificial.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Trabajo orquestando modelos de IA y diseñando arquitecturas que automatizan flujos operativos y potencian productos digitales de próxima generación.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/50 bg-secondary/30 text-xs font-medium text-foreground">
                                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                                Puebla, México
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/50 bg-secondary/30 text-xs font-medium text-foreground">
                                <User className="w-3.5 h-3.5 text-muted-foreground" />
                                25 años
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/50 bg-secondary/30 font-mono text-xs font-medium text-foreground">
                                <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
                                piczadev.eth
                            </span>
                        </div>
                    </motion.div>

                    {/* Column 2: Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pl-4 lg:pl-8 border-l border-border/50 space-y-12"
                    >
                        {experienceData.map((exp) => (
                            <div key={exp.id} className="relative">
                                {/* Timeline dot */}
                                <div className="absolute -left-[21px] lg:-left-[37px] top-1 w-3 h-3 rounded-full bg-foreground border-4 border-background" />
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                                    <p className="text-sm font-mono text-muted-foreground/70">{exp.date}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
