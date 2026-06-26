import HeroSection from "../components/landing/HeroSection";
import FeatureCard from "../components/landing/FeatureCard";
import TestimonialSection from "../components/landing/TestimonialSection";
import CTABanner from "../components/landing/CTABanner";
import Footer from "../components/layout/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureCard />
      <TestimonialSection />
      <CTABanner />
      <Footer />
    </>
  );
}

export default LandingPage;