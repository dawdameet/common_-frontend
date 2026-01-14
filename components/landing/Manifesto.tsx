"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <div className="py-24 md:py-40 bg-[#050505] border-t border-white/5 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Background Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl px-6 md:px-12 relative z-10">
        <span className="text-[10px] text-zinc-600 font-mono tracking-[0.25em] uppercase mb-12 block">Fig. 04 — Origin</span>
        
        {/* Founder Note / Manifesto Text */}
        <div className="text-left space-y-8 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white leading-[1.1]">
            Why we built this.
          </h2>
          
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-base md:text-lg">
            <p>
              We were drowning. Not in work, but in noise. Our tools, originally designed to connect us, had become engines of distraction. The Slack pings, the Jira tickets, the infinite scroll of ephemeral thoughts—it all felt like a casino designed to bankrupt our attention.
            </p>
            <p>
              We realized that <span className="text-indigo-400">deep work requires defense.</span> It needs a space that is hostile to interruption and sacred for concentration. We didn't need another chat app. We needed a sanctuary for logic.
            </p>
            <p>
              COMMON_ is our answer. It is a return to first principles: Permanence over speed. Curation over volume. Signal over noise. We built it for ourselves, to reclaim our own capacity to think. Now, we are opening the gates for you.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 opacity-60">
             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10" /> 
             <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                — System Architects, 2026
             </div>
          </div>
        </div>

        {/* Onboarding / CTA Section */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-lg"
        >
          <div className="bg-[#080808] border border-white/5 p-8 md:p-16 rounded-lg relative overflow-hidden">
             
             {/* Abstract Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
             
             <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl text-white font-light tracking-tight mb-4">
                   Ready to silence the noise?
                </h3>
                <p className="text-zinc-500 text-sm mb-8 max-w-md">
                   Begin your trial as an Observer. No credit card required for the first 14 days of signal.
                </p>

                <form className="w-full max-w-md flex flex-col md:flex-row gap-2">
                   <input 
                      type="email" 
                      placeholder="entered_email@domain.com" 
                      className="flex-1 bg-zinc-900/50 border border-white/10 rounded-md px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors"
                   />
                   <button className="bg-white text-black px-6 py-3 rounded-md text-xs font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                      <span>Initialize</span>
                      <ArrowRight className="w-3 h-3" />
                   </button>
                </form>

                <p className="mt-6 text-[10px] text-zinc-700 font-mono">
                   ENCRYPTED_CONNECTION // SECURE_HANDSHAKE_READY
                </p>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}