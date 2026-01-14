"use client";

import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Workflow } from "@/components/landing/Workflow";
import { Pricing } from "@/components/landing/Pricing";
import { Manifesto } from "@/components/landing/Manifesto";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-indigo-500/30">
      <Hero />
      <FeatureGrid />
      <Workflow />
      <Pricing />
      <Manifesto />
      <footer className="py-12 md:py-24 text-center border-t border-white/5 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
        <img src="/logo.png" alt="Common_" className="h-6 w-auto mx-auto mb-8 opacity-20 grayscale" />
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-4">System Status: Nominal</p>
        <p className="text-zinc-500 text-xs font-light">© 2026 COMMON_ — Built for the quiet ones.</p>
      </footer>
    </main>
  );
}
