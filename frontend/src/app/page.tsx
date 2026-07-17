import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Analytics } from "@/components/landing/Analytics";
import { Matchmaking } from "@/components/landing/Matchmaking";
import { TrustBar } from "@/components/landing/TrustBar";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Analytics />
        <Matchmaking />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
