"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Think Privately",
    description: "The Scribblepad. A disconnected space where you are free to be wrong. Raw input, unstructured data.",
    meta: "INPUT_LAYER"
  },
  {
    id: "02",
    title: "Curate Reality",
    description: "The Shared Board. Only validated ideas survive the filter. Promote from private to public manually.",
    meta: "FILTER_LAYER"
  },
  {
    id: "03",
    title: "Execute Orders",
    description: "The Task Spine. Decisions become directives. Every action is linked to its origin context.",
    meta: "OUTPUT_LAYER"
  },
  {
    id: "04",
    title: "Retain Memory",
    description: "The AI Core. Nothing is lost. The system observes patterns and indexes decision logic forever.",
    meta: "STORAGE_LAYER"
  }
];

export function Workflow() {
  return (
    <div className="py-20 md:py-32 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="relative">
           <div className="sticky top-32">
              <span className="text-[10px] text-indigo-400 font-mono tracking-[0.2em] uppercase mb-8 block">Fig. 03 — Process Loop</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-8 leading-[0.9]">
                Order from <br />
                <span className="text-zinc-700">Entropy.</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-light mb-12">
                Most tools blend noise and signal. We separate them physically. 
                The flow of information in COMMON_ is unidirectional and irreversible by design.
              </p>
              
              {/* Decorative Diagram */}
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/50 to-transparent mb-8" />
              <div className="flex gap-4 text-[10px] font-mono text-zinc-700">
                 <span>T_0</span>
                 <span>→</span>
                 <span>T_END</span>
              </div>
           </div>
        </div>

        {/* Right: Vertical Timeline */}
        <div className="relative border-l border-white/5 pl-8 md:pl-24 py-12">
           {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: i * 0.2, duration: 0.8 }}
               className="relative mb-16 last:mb-0 md:mb-24 group"
             >
                {/* Connector Node */}
                <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(6rem+5px)] top-2 w-2 h-2 rounded-full border border-zinc-800 bg-[#050505] group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-colors duration-500 z-10" />
                
                {/* Active Beam (Decoration) */}
                <div className="absolute -left-[calc(2rem+4px)] md:-left-[calc(6rem+4px)] top-4 w-px h-24 bg-gradient-to-b from-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />

                <div className="flex flex-col gap-4">
                   <span className="text-[10px] font-mono text-zinc-700 group-hover:text-indigo-900/80 transition-colors tracking-widest uppercase">
                      {step.id} // {step.meta}
                   </span>
                   <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-indigo-100 transition-colors">
                      {step.title}
                   </h3>
                   <p className="text-zinc-500 text-sm leading-relaxed max-w-md group-hover:text-zinc-400 transition-colors">
                      {step.description}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
}
