import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, MessageCircle, Mail, Globe, Twitter, Instagram, Tv, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", handle: "@PiczaDev", href: "https://x.com/PiczaDev", color: "hover:border-primary/50" },
  { icon: Github, label: "GitHub", handle: "Piczadev", href: "https://github.com/Piczadev", color: "hover:border-primary/50" },
  { icon: Linkedin, label: "LinkedIn", handle: "yahir-pizzadev", href: "https://www.linkedin.com/in/yahir-pizzadev/", color: "hover:border-primary/50" },
  { icon: Youtube, label: "YouTube", handle: "@piczadev0s", href: "https://www.youtube.com/@piczadev0s", color: "hover:border-primary/50" },
  { icon: Instagram, label: "Instagram", handle: "@yha.piczadev", href: "https://www.instagram.com/yha.piczadev/", color: "hover:border-primary/50" },
  { icon: MessageCircle, label: "Telegram", handle: "@PiczaDev", href: "https://t.me/PiczaDev", color: "hover:border-primary/50" },
  { icon: Tv, label: "Kick", handle: "piczadev0", href: "https://kick.com/piczadev0", color: "hover:border-primary/50" },
];

const web3Links = [
  { icon: Globe, label: "ENS Domain", handle: "piczadev.eth", href: "https://app.ens.domains/piczadev.eth" },
  { icon: Globe, label: "Base Name", handle: "piczadev", href: "https://www.base.org/name/piczadev" },
  { icon: Globe, label: "SNS (Solana)", handle: "pizzalabs", href: "https://www.sns.id/domain/pizzalabs" },
  { icon: Globe, label: "Farcaster", handle: "piczadev.eth", href: "https://farcaster.xyz/piczadev.eth" },
  { icon: Globe, label: "Portrait", handle: "piczadev", href: "https://portrait.so/piczadev" },
];

const contactLinks = [
  { icon: Mail, label: "Email", handle: "dev@piczadev.com", href: "mailto:dev@piczadev.com" },
];

const LinkCard = ({ link, index }: { link: typeof socialLinks[0]; index: number }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    whileHover={{ y: -2 }}
    className="group glass-card p-4 flex items-center gap-3 hover:border-primary/40 hover:glow-border transition-all duration-300"
  >
    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
      <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium">{link.label}</p>
      <p className="text-xs text-muted-foreground truncate">{link.handle}</p>
    </div>
    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const LinksSection = () => {
  return (
    <section id="links" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-semibold mb-2"
        >
          Links
        </motion.h2>
        <p className="text-muted-foreground text-sm mb-8">Redes sociales, dominios Web3 y contacto</p>

        {/* Social */}
        <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Redes Sociales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {socialLinks.map((link, i) => (
            <LinkCard key={link.href} link={link} index={i} />
          ))}
        </div>

        {/* Web3 */}
        <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Web3 & Dominios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {web3Links.map((link, i) => (
            <LinkCard key={link.href} link={{ ...link, color: "hover:border-primary/50" }} index={i} />
          ))}
        </div>

        {/* Contact */}
        <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-3">Contacto</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contactLinks.map((link, i) => (
            <LinkCard key={link.href} link={{ ...link, color: "hover:border-primary/50" }} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
