"use client";

import React from "react";
import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <div className="py-24 md:py-40 bg-[#050505] border-t border-white/5 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Background Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl px-6 md:px-12 relative z-10">
        <span className="text-[10px] text-zinc-600 font-mono tracking-[0.25em] uppercase mb-12 block">Fig. 04 — The Logic</span>
        
        <h2 className="text-3xl md:text-6xl font-light tracking-tighter text-white leading-[1.1] mb-16">
          Intelligence is not about speed. <br />
          It is about <span className="text-indigo-400/80">retention.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left">
           <div>
              <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-widest">The Problem</h4>
              <p className="text-zinc-500 text-sm leading-loose font-light">
                 Modern tools are designed for motion, not thought. Chats scroll away. Whiteboards are infinite and messy. 
                 Context is lost in the stream. Organizations suffer from collective amnesia.
              </p>
           </div>
           <div>
              <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-widest">The Solution</h4>
              <p className="text-zinc-500 text-sm leading-loose font-light">
                 A system that forces you to curate. Private thoughts stay private. Shared thoughts are permanent. 
                 AI acts as a librarian, not a generator. We protect the signal.
              </p>
           </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mt-16 pt-16 md:mt-24 md:pt-24 border-t border-white/5"
        >
           <p className="text-5xl md:text-9xl font-bold tracking-tighter text-white/5 select-none">
              COMMON_
           </p>
        </motion.div>
      </div>
    </div>
  );
}
