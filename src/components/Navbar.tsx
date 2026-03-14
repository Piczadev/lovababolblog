import { motion } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí & CV", href: "#about" },
  { label: "Blog & Newsletter", href: "#blog" },
  { label: "Enlaces", href: "#links" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4 flex items-center justify-between"
    >
      <a href="#hero" className="font-display text-xl font-bold tracking-tight text-foreground">
        Yahir Rivera
      </a>
      <div className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
