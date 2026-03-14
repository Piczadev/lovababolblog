import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LinksSection from "@/components/LinksSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import BlogSection from "@/components/BlogSection";
import TwitchSection from "@/components/TwitchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <LinksSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <ExperienceSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <SkillsSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <EducationSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <BlogSection />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-border/50" />
      </div>
      <TwitchSection />

      <footer className="py-12 text-center">
        <span className="text-xs text-muted-foreground">
          © 2026 Yahir Rivera Flores · Hecho con ☕ desde Puebla
        </span>
      </footer>
    </div>
  );
};

export default Index;
