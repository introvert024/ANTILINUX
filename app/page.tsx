"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Philosophy from "@/components/Philosophy";
import ComparisonTable from "@/components/ComparisonTable";
import FeaturesGrid from "@/components/FeaturesGrid";
import ReleasesSection from "@/components/ReleasesSection";
import ScriptGenerator from "@/components/ScriptGenerator";
import MigrationGuide from "@/components/MigrationGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <InteractiveTerminal />
      <Philosophy />
      <ComparisonTable />
      <FeaturesGrid />
      <ReleasesSection />
      <ScriptGenerator />
      <MigrationGuide />
      <Footer />
    </main>
  );
}
