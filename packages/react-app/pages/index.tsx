import HeroSection from "../components/Hero";
import RemixIDESection from "../components/HowItWorks";

export default function Home() {
  return (
    <div>
      <div className="h1">
        <HeroSection />
        <RemixIDESection />
      </div>
    </div>
  );
}
