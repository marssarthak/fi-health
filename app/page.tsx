import { AnalysisDashboard } from "@/components/dashboard/AnalysisDashboard";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <AnalysisDashboard />
      </main>
    </div>
  );
}
