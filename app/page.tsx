import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SocialProofBar from "./components/SocialProofBar";
import ProblemSection from "./components/ProblemSection";
import OpportunitySection from "./components/OpportunitySection";
import SolutionSection from "./components/SolutionSection";
import WhoIsItFor from "./components/WhoIsItFor";
import OgeTestimonial from "./components/OgeTestimonial";
import CourseModules from "./components/CourseModules";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <NavBar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <OpportunitySection />
        <SolutionSection />
        <TestimonialsSection />
        <WhoIsItFor />
        <OgeTestimonial />
        <CourseModules />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
