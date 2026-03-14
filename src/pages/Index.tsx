import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="border-t border-border" />
      <ExperienceSection />
      <div className="border-t border-border" />
      <SkillsSection />
      <div className="border-t border-border" />
      <BlogSection />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            © 2026 Yahir Rivera Flores
          </span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            BUILT WITH HIGH PERFORMANCE
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
