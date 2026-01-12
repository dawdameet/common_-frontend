"use client";

import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Hero />
      <FeatureGrid />
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2026 COMMON. Built for the quiet ones.</p>
      </footer>
    </main>
  );
}
