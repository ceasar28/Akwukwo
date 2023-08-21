import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div>
      <div className="h1">
        <Hero></Hero>
        <HowItWorks />
      </div>
    </div>
  );
}
