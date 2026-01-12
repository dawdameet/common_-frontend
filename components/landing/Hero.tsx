"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, GitCommit, Database, Zap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative h-screen w-full bg-zinc-950 flex flex-col overflow-hidden border-b border-zinc-800 selection:bg-emerald-500/30">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 w-full h-32 flex items-center justify-between px-8 md:px-12 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
        <div className="text-zinc-100 text-xl font-bold tracking-widest uppercase flex items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-sm" />
          Common_
        </div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Manifesto</a>
           <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors">Organization</a>
           <button className="px-4 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-colors">Access</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-3">
        
        {/* Main Content Column */}
        <div className="md:col-span-2 relative flex flex-col justify-end pb-32 p-8 md:p-12 border-r border-zinc-800">
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

        {/* Right Interface Column */}
        <div className="relative p-8 flex flex-col justify-center items-center overflow-hidden bg-zinc-900/20">
           
           {/* System Interface Dashboard */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full max-w-sm aspect-[3/4] md:aspect-auto md:h-[600px] bg-zinc-950 border border-zinc-800 rounded-xl p-4 shadow-2xl flex flex-col gap-4 relative overflow-hidden"
           >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[200%] w-full animate-scan pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                 </div>
                 <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Sys_Mon_01</div>
              </div>

              {/* Grid Layout */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                 
                 {/* Card 1: Velocity */}
                 <div className="col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider flex items-center gap-2">
                          <Activity className="w-3 h-3" /> Velocity
                       </span>
                       <span className="text-emerald-400 text-xs font-mono">98.2%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                       {[40, 70, 50, 90, 60, 80, 45, 95, 30, 60, 85, 75, 50, 90, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="flex-1 bg-zinc-800 hover:bg-emerald-500/50 transition-colors rounded-t-sm"
                          />
                       ))}
                    </div>
                 </div>

                 {/* Card 2: AI Status */}
                 <div className="col-span-1 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 flex flex-col justify-between">
                    <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider flex items-center gap-2">
                       <Zap className="w-3 h-3" /> AI Core
                    </span>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                       <span className="text-zinc-200 text-xs font-mono">Online</span>
                    </div>
                 </div>

                 {/* Card 3: Storage */}
                 <div className="col-span-1 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 flex flex-col justify-between">
                    <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider flex items-center gap-2">
                       <Database className="w-3 h-3" /> Mem
                    </span>
                    <div className="text-zinc-200 text-xs font-mono">
                       4.2TB <span className="text-zinc-600">/ inf</span>
                    </div>
                 </div>

                 {/* Card 4: Log Feed */}
                 <div className="col-span-2 flex-1 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 font-mono text-[10px] text-zinc-400 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2 opacity-50">
                       <Clock className="w-3 h-3" />
                    </div>
                    <ul className="space-y-2">
                       <li className="flex gap-2">
                          <span className="text-zinc-600">10:42:01</span>
                          <span className="text-emerald-500">INIT_CORE</span>
                       </li>
                       <li className="flex gap-2">
                          <span className="text-zinc-600">10:42:05</span>
                          <span>Observer_Node connected</span>
                       </li>
                       <li className="flex gap-2">
                          <span className="text-zinc-600">10:42:12</span>
                          <span>Pattern match: <span className="text-blue-400">99.9%</span></span>
                       </li>
                       <li className="flex gap-2">
                          <span className="text-zinc-600">10:42:45</span>
                          <span>Optimizing decision tree...</span>
                       </li>
                       <li className="flex gap-2 opacity-50">
                          <span className="text-zinc-600">10:43:00</span>
                          <span>Awaiting input...</span>
                       </li>
                    </ul>
                    {/* Gradient Fade for Log */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
                 </div>

              </div>
           </motion.div>

        </div>
      </div>
    </div>
  );
}
