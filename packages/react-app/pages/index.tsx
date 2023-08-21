import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div>
      <div className="h1">
        <HeroSection />
        <HowItWorks />
      </div>
    </div>
  );
}
