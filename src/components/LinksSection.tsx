import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, MessageCircle, Mail, Globe, Twitter, Instagram, Tv, ExternalLink } from "lucide-react";

const links = [
  { icon: Twitter, label: "X (Twitter)", handle: "@PiczaDev", href: "https://x.com/PiczaDev" },
  { icon: Github, label: "GitHub", handle: "Piczadev", href: "https://github.com/Piczadev" },
  { icon: Linkedin, label: "LinkedIn", handle: "yahir-pizzadev", href: "https://www.linkedin.com/in/yahir-pizzadev/" },
  { icon: Youtube, label: "YouTube", handle: "@piczadev0s", href: "https://www.youtube.com/@piczadev0s" },
  { icon: Instagram, label: "Instagram", handle: "@yha.piczadev", href: "https://www.instagram.com/yha.piczadev/" },
  { icon: MessageCircle, label: "Telegram", handle: "@PiczaDev", href: "https://t.me/PiczaDev" },
  { icon: Tv, label: "Kick", handle: "piczadev0", href: "https://kick.com/piczadev0" },
  { icon: Globe, label: "Farcaster", handle: "piczadev.eth", href: "https://farcaster.xyz/piczadev.eth" },
  { icon: Globe, label: "ENS Domain", handle: "piczadev.eth", href: "https://app.ens.domains/piczadev.eth" },
  { icon: Globe, label: "Base Name", handle: "piczadev", href: "https://www.base.org/name/piczadev" },
  { icon: Globe, label: "SNS (Solana)", handle: "pizzalabs", href: "https://www.sns.id/domain/pizzalabs" },
  { icon: Globe, label: "Portrait", handle: "piczadev", href: "https://portrait.so/piczadev" },
  { icon: Mail, label: "Email", handle: "dev@piczadev.com", href: "mailto:dev@piczadev.com" },
];

const LinksSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold mb-6"
        >
          Links
        </motion.h2>

        <div className="grid gap-2">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
              <span className="text-sm text-muted-foreground">{link.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
