import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutCourse } from "@/components/AboutCourse";
import { Fundamentals } from "@/components/Fundamentals";
import { AboutInstructor } from "@/components/AboutInstructor";
import { CourseModules } from "@/components/CourseModules";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="about">
        <AboutCourse />
      </div>
      <Fundamentals />
      <AboutInstructor />
      <div id="modules">
        <CourseModules />
      </div>
      <div id="bonus">
        <BonusSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
