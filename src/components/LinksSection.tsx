import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Youtube, WalletCards, Hexagon, Fingerprint, Instagram, Anchor, Send, Gamepad2 } from "lucide-react";
import customIcon1 from "@/assets/extension_icon.svg";
import customIcon2 from "@/assets/extension_icon (1).svg";
import customIcon3 from "@/assets/extension_icon-2.svg";
import customIcon4 from "@/assets/extension_icon-3.svg";
import customIcon5 from "@/assets/extension_icon-4.svg";

// Categorized Links as requested
const linksData = {
  social: [
    { title: "X (Twitter)", icon: Twitter, customIcon: customIcon1, href: "https://x.com/PiczaDev", hoverColor: "group-hover:text-sky-400" },
    { title: "GitHub", icon: Github, customIcon: customIcon2, href: "https://github.com/Piczadev", hoverColor: "group-hover:text-white" },
    { title: "LinkedIn", icon: Linkedin, customIcon: customIcon3, href: "https://www.linkedin.com/in/yahir-pizzadev/", hoverColor: "group-hover:text-blue-500" },
    { title: "Instagram", icon: Instagram, customIcon: customIcon4, href: "https://www.instagram.com/yha.piczadev/", hoverColor: "group-hover:text-pink-500" },
    { title: "Telegram", icon: Send, customIcon: customIcon5, href: "https://t.me/PiczaDev", hoverColor: "group-hover:text-sky-400" },
    { title: "Link Tree / Portrait", icon: Anchor, href: "https://portrait.so/piczadev", hoverColor: "group-hover:text-emerald-400" },
  ],
  web3: [
    { title: "ENS", subtitle: "piczadev.eth", icon: Hexagon, href: "https://app.ens.domains/piczadev.eth", hoverColor: "group-hover:text-blue-400", hoverBg: "hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
    { title: "Base Name", subtitle: "piczadev.base.eth", icon: WalletCards, href: "https://www.base.org/name/piczadev", hoverColor: "group-hover:text-blue-500", hoverBg: "hover:border-blue-600/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]" },
    { title: "SNS (Solana)", subtitle: "pizzalabs.sol", icon: Fingerprint, href: "https://www.sns.id/domain/pizzalabs", hoverColor: "group-hover:text-purple-400", hoverBg: "hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
    { title: "Farcaster", subtitle: "piczadev.eth", icon: Hexagon, href: "https://farcaster.xyz/piczadev.eth", hoverColor: "group-hover:text-purple-500", hoverBg: "hover:border-purple-600/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.15)]" },
  ],
  content: [
    { title: "YouTube", icon: Youtube, href: "https://www.youtube.com/@piczadev0s", hoverColor: "group-hover:text-red-500" },
    { title: "Kick", icon: Gamepad2, href: "https://kick.com/piczadev0", hoverColor: "group-hover:text-green-400" },
  ],
  contact: {
    title: "Contacto Directo",
    subtitle: "dev@piczadev.com",
    icon: Mail,
    href: "mailto:dev@piczadev.com",
    hoverColor: "group-hover:text-primary"
  }
};

const LinksSection = () => {
  return (
    <section id="links" className="py-24 px-6 relative w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">Enlaces & Identidad Web3</h2>
          <div className="h-px bg-primary/20 w-full mt-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">

          {/* Social Links Bento (spans 1 col, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl border border-border/50 bg-card p-6 flex flex-col h-full hover:border-border transition-colors group/bento shadow-sm hover:shadow-primary/5"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6 border-b border-border/50 pb-4">Socials & Contacto</p>
            <div className="flex flex-col gap-4 flex-1 relative z-10">
              {linksData.social.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-full border border-border/50 bg-background flex items-center justify-center transition-colors ${link.hoverColor.replace('text-', 'border-').replace('group-hover:', 'group-hover:')}`}>
                    <link.icon className={`w-4 h-4 text-muted-foreground transition-colors ${link.hoverColor}`} />
                  </div>
                  <span className="font-medium text-sm text-foreground">{link.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Web3 Domains Bento (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 rounded-3xl border border-border/50 bg-secondary/20 p-6 relative overflow-hidden group/web3"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover/web3:bg-primary/20 transition-colors duration-500" />
            <div className="relative z-10 w-full flex flex-col justify-between h-full">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Web3 & Dominios</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {linksData.web3.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 bg-background border border-border/50 rounded-2xl p-4 transition-all hover:bg-muted/30 ${link.hoverBg}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <link.icon className={`w-5 h-5 text-muted-foreground transition-colors ${link.hoverColor}`} />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-medium text-foreground truncate">{link.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{link.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content & Streaming Bento (spans 1 col) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="md:col-span-1 rounded-3xl border border-border/50 bg-card p-6 flex flex-col h-full hover:border-border transition-colors group/content shadow-sm hover:shadow-primary/5"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6 border-b border-border/50 pb-4">Streaming</p>
            <div className="flex flex-col gap-4 flex-1 relative z-10 justify-center">
              {linksData.content.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-full border border-border/50 bg-background flex items-center justify-center transition-colors ${link.hoverColor.replace('text-', 'border-').replace('group-hover:', 'group-hover:')}`}>
                    <link.icon className={`w-4 h-4 text-muted-foreground transition-colors ${link.hoverColor}`} />
                  </div>
                  <span className="font-medium text-sm text-foreground">{link.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Bento */}
          <motion.a
            href={linksData.contact.href}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 lg:col-span-3 rounded-3xl border border-border/50 bg-card hover:bg-secondary/40 p-6 flex items-center justify-between group transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden h-full"
          >
            <div className="relative z-10 w-full flex items-center justify-between px-2 sm:px-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{linksData.contact.title}</p>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold font-sans text-foreground transition-colors truncate">
                  {linksData.contact.subtitle}
                </h3>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/50 bg-background flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all shrink-0">
                <linksData.contact.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default LinksSection;
