"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] flex flex-col overflow-hidden selection:bg-indigo-500/30">
      
      {/* Subtle Grain/Noise Texture if desired, but sticking to pure minimalist vector for now */}
      
      {/* Navigation */}
      <nav className="relative z-10 w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-12 border-b border-white/5">
        <div className="text-zinc-100 text-sm font-medium tracking-[0.2em] uppercase opacity-80">Common_</div>
        <div className="hidden md:flex items-center gap-12">
           <a href="#manifesto" className="text-zinc-500 hover:text-zinc-300 text-[10px] uppercase tracking-[0.2em] transition-colors">Manifesto</a>
           <a href="#index" className="text-zinc-500 hover:text-zinc-300 text-[10px] uppercase tracking-[0.2em] transition-colors">Index</a>
           <span className="w-1 h-1 bg-zinc-800 rounded-full" />
           <a href="#" className="text-zinc-300 hover:text-white text-[10px] uppercase tracking-[0.2em] transition-colors">Access</a>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Column: Typography (Heavy, Bottom-Anchored) */}
        <div className="relative flex flex-col justify-end pb-20 px-6 md:pb-32 md:pl-12 md:pr-12 border-r border-white/5 order-2 md:order-1">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Ultra-smooth ease
             className="max-w-xl"
           >
             <div className="flex flex-col gap-1 mb-8 md:mb-12 opacity-50">
                <span className="text-[10px] text-indigo-400 font-mono tracking-widest uppercase">Fig. 01 — Consilience</span>
             </div>

             <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-8 md:mb-12 leading-[0.95]">
               Thought <br />
               <span className="text-zinc-600">Architecture.</span>
             </h1>
             
             <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-sm mb-8 md:mb-12 tracking-wide">
               A system for deep work. Silence the noise. <br />
               Curate the signal. Permanence for the intelligent.
             </p>

             <button className="group flex items-center gap-6 text-white/80 hover:text-white transition-colors">
               <span className="h-px w-12 bg-white/20 group-hover:w-20 transition-all duration-500" />
               <span className="text-[10px] uppercase tracking-[0.25em]">Initialize</span>
             </button>
           </motion.div>
        </div>

        {/* Right Column: Mathematical Abstraction */}
        <div className="relative flex items-center justify-center overflow-hidden py-12 md:py-0 order-1 md:order-2">
           
           {/* The Artifact */}
           <div className="relative w-full max-w-[350px] md:max-w-[600px] aspect-square flex items-center justify-center opacity-80">
              
              {/* Core Glow */}
              <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)]" />

              {/* Ring 1: Violet Ellipse - Slow Rotation */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute w-[83%] h-[83%] rounded-full border border-violet-500/10"
              />

              {/* Ring 2: Indigo Dashed - Counter Rotation */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute w-[58%] h-[58%] rounded-full border border-dashed border-indigo-500/20"
              />

              {/* Ring 3: Concentric Waves (Static geometry) */}
              {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
                    className={cn(
                        "absolute rounded-full border border-white/5",
                        i === 1 ? "w-[33%] h-[33%]" : 
                        i === 2 ? "w-[46%] h-[46%] border-indigo-500/10" : 
                        "w-[70%] h-[70%]"
                    )}
                  />
              ))}

              {/* Orbital Marker */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[46%] h-[46%]"
              >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
              </motion.div>

              {/* Central Singularity */}
              <div className="absolute w-px h-px bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
           </div>

           {/* Technical Coordinates - Floating */}
           <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col items-end gap-1 text-[8px] font-mono text-zinc-700">
              <span>R_42.091</span>
              <span>Θ_12.550</span>
              <span className="text-indigo-900/50">SIGNAL_LOCKED</span>
           </div>

        </div>
      </div>
    </div>
  );
}
