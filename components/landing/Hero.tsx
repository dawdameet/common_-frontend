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
        <div className="md:col-span-2 relative flex flex-col justify-end pb-32 p-8 md:p-12">
           
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
        <div className="relative flex flex-col justify-center items-center border-l border-zinc-800/50 md:border-transparent overflow-hidden">
           
           {/* Abstract Colorful Art - Shifted Down */}
           <div className="relative w-full h-full flex items-center justify-center pt-32">
              {/* Glowing Gradient Orb Background */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-x-10 translate-y-10"
              />

              {/* Geometric Wireframes */}
              <motion.div 
                 className="relative w-64 h-64 border border-zinc-700/50 rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                 <div className="absolute inset-0 border border-t-purple-500/50 border-r-transparent border-b-transparent border-l-transparent rounded-full rotate-45" />
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </motion.div>

              <motion.div 
                 className="absolute w-48 h-48 border border-zinc-700/50"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                 <div className="absolute inset-0 border border-t-blue-500/50 border-r-transparent border-b-transparent border-l-transparent" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </motion.div>

              {/* Central Core */}
              <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
           </div>

           {/* Decorative Grid Graphic (Bottom Right) - Retained for technical feel */}
           <div className="absolute bottom-0 right-0 aspect-square w-1/2 border-t border-l border-zinc-800 opacity-30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[size:10px_10px] bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] opacity-20" />
              <div className="absolute bottom-4 right-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest text-right">
                 Scanning<br/>Sector_09
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
