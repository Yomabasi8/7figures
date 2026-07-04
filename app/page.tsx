import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SocialProofBar from "./components/SocialProofBar";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import WhoIsItFor from "./components/WhoIsItFor";
import CourseModules from "./components/CourseModules";
import CourseDetails from "./components/CourseDetails";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
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
        <SolutionSection />
        <WhoIsItFor />
        <CourseModules />
        <CourseDetails />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
