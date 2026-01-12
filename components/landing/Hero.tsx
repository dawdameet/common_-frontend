"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="relative h-screen w-full bg-zinc-950 flex flex-col overflow-hidden border-b border-zinc-800">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Structural Lines (The "Cross" or Asymmetry) */}
      {/* Vertical Line splitting 2/3 and 1/3 */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-zinc-800 hidden md:block" />
      {/* Horizontal Line splitting Top and Bottom */}
      <div className="absolute top-32 w-full h-px bg-zinc-800" />

      {/* Navigation / Top Section */}
      <nav className="relative z-10 w-full h-32 flex items-center justify-between px-8 md:px-12">
        <div className="text-zinc-100 text-xl font-bold tracking-widest uppercase">Common_</div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Manifesto</a>
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Pricing</a>
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Login</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-3">
        {/* Left Void (Empty Top Left, Content Bottom Left) */}
        <div className="md:col-span-2 relative flex flex-col justify-end p-8 md:p-12 border-r border-zinc-800/50 md:border-transparent">
           
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-3xl"
           >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
               Nothing intelligent <br />
               ever disappears.
             </h1>
             
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
               <button className="group flex items-center gap-4 text-zinc-100 border-b border-zinc-100 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                 <span className="text-sm font-mono uppercase tracking-widest">Initialize System</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
                 A decision engine for organizations. Thinking is private. Reality is curated. Memory is permanent.
               </p>
             </div>
           </motion.div>
        </div>

        {/* Right Column (Top Right Content) */}
        <div className="relative p-8 md:p-12 flex flex-col">
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             className="mb-auto"
           >
             <div className="inline-flex items-center gap-3 text-emerald-500 mb-4">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               <span className="text-xs font-mono uppercase tracking-widest">System Operational v1.0</span>
             </div>
             <p className="text-zinc-400 text-sm leading-relaxed">
               All systems nominal. <br />
               Board: Active <br />
               Scribblepad: Secure <br />
               AI: Listening
             </p>
           </motion.div>

           {/* Decorative Grid Graphic Bottom Right */}
           <div className="mt-auto aspect-square w-full border border-zinc-800 opacity-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[size:10px_10px] bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] opacity-20" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-zinc-700 bg-zinc-900/50" />
              <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-zinc-600" />
           </div>
        </div>
      </div>
    </div>
  );
}
