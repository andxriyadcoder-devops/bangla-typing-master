import HeroSection from "../components/layout/HeroSection";
import StatsSection from "../components/layout/StatsSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import KeyboardPreview from "../components/layout/KeyboardPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <KeyboardPreview />
    </>
  );
}