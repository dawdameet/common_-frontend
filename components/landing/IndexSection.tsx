"use client";

import React from "react";
import { motion } from "framer-motion";

const indexItems = [
  { id: "001", term: "ARCHETYPE", def: "The fundamental structure of a thought." },
  { id: "002", term: "CANON", def: "The agreed-upon truth of the network." },
  { id: "003", term: "DECAY", def: "The natural entropy of uncurated signals." },
  { id: "004", term: "ENCLAVE", def: "A private, encrypted space for cognition." },
  { id: "005", term: "FLUX", def: "The state of a thought before it solidifies." },
  { id: "006", term: "GATEWAY", def: "The interface between private and public." },
  { id: "007", term: "HYPERLINK", def: "A connection that transcends linear time." },
  { id: "008", term: "PROTOCOL", def: "The rules that govern the exchange of ideas." },
  { id: "009", term: "SIGNAL", def: "Information that survives the filter." },
  { id: "010", term: "ZERO_POINT", def: "The origin of all coordinate systems." },
];

export function IndexSection() {
  return (
    <div id="index" className="py-20 px-6 md:py-32 md:px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
       <div className="max-w-7xl mx-auto">
          <span className="text-[10px] text-zinc-600 font-mono tracking-[0.2em] uppercase mb-12 block">Fig. 05 — Index</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
             {indexItems.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group flex items-baseline gap-4 border-b border-white/5 pb-4 hover:border-white/20 transition-colors"
                >
                   <span className="text-[10px] font-mono text-zinc-700 group-hover:text-indigo-500/50 transition-colors">{item.id}</span>
                   <div>
                      <h4 className="text-xs font-medium text-zinc-300 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">{item.term}</h4>
                      <p className="text-[10px] text-zinc-600 font-mono leading-relaxed">{item.def}</p>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
}
