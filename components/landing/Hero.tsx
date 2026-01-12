"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, PenTool, Brain } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden selection:bg-zinc-800 selection:text-zinc-100">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
      
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>v1.0 is live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
            Nothing intelligent ever <br />
            <span className="text-zinc-500">disappears again.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
            A decision engine for organizations. Thinking is private. Reality is curated. 
            Memory is permanent. The whiteboard that remembers everything.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
              Start Thinking
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-full bg-zinc-900 text-zinc-300 font-medium text-sm border border-zinc-800 hover:bg-zinc-800 transition-colors">
              Read the Manifesto
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Cards (Visual Only) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] pointer-events-none opacity-50">
         <motion.div 
            className="absolute left-[10%] bottom-[10%] w-64 h-40 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl rotate-[-6deg]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
         >
            <div className="flex items-center gap-2 mb-3 text-blue-400">
               <LayoutDashboard className="w-4 h-4" />
               <span className="text-xs uppercase font-bold tracking-wider">Idea</span>
            </div>
            <div className="h-2 w-3/4 bg-zinc-800 rounded mb-2" />
            <div className="h-2 w-1/2 bg-zinc-800 rounded" />
         </motion.div>

         <motion.div 
            className="absolute right-[15%] bottom-[20%] w-64 h-40 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl rotate-[3deg]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
         >
            <div className="flex items-center gap-2 mb-3 text-purple-400">
               <Brain className="w-4 h-4" />
               <span className="text-xs uppercase font-bold tracking-wider">AI Insight</span>
            </div>
            <div className="h-2 w-full bg-zinc-800 rounded mb-2" />
            <div className="h-2 w-5/6 bg-zinc-800 rounded" />
         </motion.div>
      </div>
    </div>
  );
}
