import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Links", href: "#links" },
  { label: "Experiencia", href: "#experience" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 flex items-center gap-6"
    >
      <a href="#hero" className="font-display text-lg font-semibold text-primary">
        YRF
      </a>
      <div className="hidden sm:flex items-center gap-5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
