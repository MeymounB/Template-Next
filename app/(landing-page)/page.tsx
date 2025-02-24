"use client";

import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TechStackSection } from "./components/TechStackSection";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
    </main>
  );
}
