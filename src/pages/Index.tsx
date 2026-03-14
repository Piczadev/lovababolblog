import HeroSection from "@/components/HeroSection";
import LinksSection from "@/components/LinksSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <hr className="border-border max-w-2xl mx-auto" />
      <LinksSection />
      <hr className="border-border max-w-2xl mx-auto" />
      <ExperienceSection />
      <hr className="border-border max-w-2xl mx-auto" />
      <SkillsSection />
      <hr className="border-border max-w-2xl mx-auto" />
      <EducationSection />
      <hr className="border-border max-w-2xl mx-auto" />
      <BlogSection />

      <footer className="py-12 text-center">
        <span className="text-xs text-muted-foreground">
          © 2026 Yahir Rivera Flores
        </span>
      </footer>
    </div>
  );
};

export default Index;
