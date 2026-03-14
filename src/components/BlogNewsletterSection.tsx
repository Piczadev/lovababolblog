import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Loader2, Check } from "lucide-react";

import { blogPosts } from "@/data/config";

/**
 * BlogNewsletterSection Component
 * 
 * Se encarga de mapear y renderizar las tarjetas de blog desde la configuración,
 * y hospeda un componente iterativo de Newsletter habilitado para integraciones Webhook/API.
 */
const BlogNewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    /**
     * handleSubmit
     * Controla el ciclo de vida asíncrono para el alta del correo:
     * - `idle`: Estado por defecto.
     * - `loading`: Bloquea inserciones concurrentes y muestra un spinner.
     * - `success`: Llama a la simulación/API OK, limpia el formulario e interacciona el botón.
     * - `error`: Petición fallida, despliega feedback rojo de error.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus('loading');

        try {
            // Read from Vite env var
            const webhookUrl = import.meta.env.VITE_NEWSLETTER_WEBHOOK;

            // If there's no webhook defined, we simulate a successful request for UX demo
            if (!webhookUrl) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus('success');
                setEmail("");
                return;
            }

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail("");
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Newsletter submission error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="blog" className="py-24 px-6 relative w-full overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-20">

                {/* Blog Post Grid */}
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">Escritos & Updates</h2>
                        <div className="h-px bg-border w-full mt-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.a
                                href={post.link}
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col p-6 rounded-3xl border border-border/50 bg-card hover:border-primary/50 hover:bg-secondary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all cursor-pointer overflow-hidden"
                            >
                                <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative border border-border/50">
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono font-medium tracking-wider uppercase px-2 py-1 rounded bg-secondary text-muted-foreground group-hover:bg-background/80 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold font-sans text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                                        <span className="text-[10px] text-muted-foreground/70 font-mono mt-0.5">{post.readTime}</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Newsletter Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full rounded-3xl bg-secondary/30 border border-border/50 p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden"
                >
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                    <div className="relative z-10 space-y-3">
                        <h3 className="font-display text-3xl font-bold text-foreground">Suscríbete a mi newsletter técnico</h3>
                        <p className="text-muted-foreground pt-1 max-w-md mx-auto">Únete a cientos de lectores informándose sobre la intersección de Inteligencia Artificial y Web3.</p>
                    </div>

                    <form className="relative z-10 flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={handleSubmit}>
                        <div className="relative flex-1 flex flex-col gap-2">
                            <div className="relative w-full">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (status === 'error' || status === 'success') setStatus('idle');
                                    }}
                                    disabled={status === 'loading' || status === 'success'}
                                    placeholder="tu@email.com"
                                    className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-xl text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/70 disabled:opacity-50"
                                    required
                                />
                            </div>
                            {status === 'error' && (
                                <span className="text-xs text-red-500/90 ml-1">Hubo un error al suscribirte. Intenta de nuevo.</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`px-6 py-3 font-medium text-sm rounded-xl transition-all shrink-0 flex items-center justify-center gap-2 min-w-[140px] ${status === 'success'
                                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                : 'bg-foreground text-background hover:bg-foreground/90 disabled:opacity-70 disabled:hover:bg-foreground border border-transparent'
                                }`}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Enviando...</span>
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    <span>Suscrito</span>
                                </>
                            ) : (
                                "Suscribirse"
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default BlogNewsletterSection;
