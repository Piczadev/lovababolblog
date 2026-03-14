import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogNewsletterSection from "@/components/BlogNewsletterSection";
import LinksSection from "@/components/LinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <HeroSection />

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <AboutSection />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-primary/20 w-full shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
      </div>
      <BlogNewsletterSection />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-primary/20 w-full shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
      </div>
      <LinksSection />

      <footer className="py-12 mt-12 text-center text-sm text-muted-foreground border-t border-border/50 bg-secondary/10">
        <p className="font-sans">© {new Date().getFullYear()} Yahir Rivera Flores · Diseño Editorial & Dark Mode</p>
      </footer>
    </div>
  );
};

export default Index;
