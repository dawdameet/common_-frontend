"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="relative h-screen w-full bg-zinc-950 flex flex-col overflow-hidden border-b border-zinc-800">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Structural Lines */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-zinc-800 hidden md:block" />
      <div className="absolute top-32 w-full h-px bg-zinc-800" />

      {/* Navigation */}
      <nav className="relative z-10 w-full h-32 flex items-center justify-between px-8 md:px-12">
        <div className="text-zinc-100 text-xl font-bold tracking-widest uppercase">Common_</div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Manifesto</a>
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Organization</a>
           <button className="px-4 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors">Access</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-3">
        {/* Main Content Column */}
        <div className="md:col-span-2 relative flex flex-col justify-center pb-32 p-8 md:p-12">
           
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-3xl"
           >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-12 leading-[0.9]">
               Nothing intelligent <br />
               ever disappears.
             </h1>
             
             <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
               <button className="group flex items-center gap-4 text-zinc-100 border-b border-zinc-100 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                 <span className="text-sm font-mono uppercase tracking-widest">Initialize</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <div className="flex flex-col gap-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">Decision Engine v1.0</p>
                  <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-light">
                    Thinking is private by default. Reality is curated. Memory is permanent.
                  </p>
               </div>
             </div>
           </motion.div>
        </div>

        {/* Right Abstract Column */}
        <div className="relative p-8 md:p-12 flex flex-col border-l border-zinc-800/50 md:border-transparent">
           {/* Abstract Minimal Element (Top Right) */}
           <div className="mb-auto py-12">
              <div className="relative w-24 h-24">
                 <div className="absolute inset-0 border border-zinc-800 rotate-45" />
                 <div className="absolute inset-2 border border-zinc-700 -rotate-12 opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-zinc-500 rounded-full" />
                 </div>
              </div>
           </div>

           {/* Decorative Grid Graphic (Bottom Right) */}
           <div className="mt-auto aspect-square w-full border border-zinc-800 opacity-30 relative overflow-hidden group hover:opacity-50 transition-opacity duration-700">
              <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] opacity-10" />
              <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-8 h-px bg-zinc-700" />
                    <div className="w-px h-8 bg-zinc-700" />
                 </div>
                 <div className="flex justify-between items-end text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                    <span>Coord_042</span>
                    <span>Alpha_Init</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
