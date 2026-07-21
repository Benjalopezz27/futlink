import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Analytics } from "@/components/landing/Analytics";
import { Matchmaking } from "@/components/landing/Matchmaking";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { TrustBar } from "@/components/landing/TrustBar";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBF9] dark:bg-[#0D1410] font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="pt-[80px] md:pt-[96px]">
        <Hero />
        <Analytics />
        <Matchmaking />
        <SuccessStories />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
