import { TransferMarketBanner } from "@/components/landing/TransferMarketBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ScoreboardBar } from "@/components/landing/ScoreboardBar";
import { Analytics } from "@/components/landing/Analytics";
import { LeagueScoutingTable } from "@/components/landing/LeagueScoutingTable";
import { Matchmaking } from "@/components/landing/Matchmaking";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Section } from "@/components/landing/Section";
import { Reveal } from "@/components/landing/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBF9] dark:bg-[#0D1410] font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-white transition-colors duration-300">
      <TransferMarketBanner />
      <Navbar />
      <main>
        <Hero />
        <ScoreboardBar />
        <Analytics />

        {/* League Scouting Standings Section */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold">
                // Tabla de Posiciones de Scouting
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Líderes de rendimiento en la plataforma
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeagueScoutingTable />
          </Reveal>
        </Section>

        <Matchmaking />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
