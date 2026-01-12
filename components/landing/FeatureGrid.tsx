"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PenTool, CheckSquare, Sparkles } from "lucide-react";

const features = [
  {
    id: "01",
    label: "SHARED_BOARD",
    title: "Canonical Reality",
    description: "A finite plane for curated thought. Nothing enters without friction. Truth is singular.",
    icon: LayoutDashboard,
  },
  {
    id: "02",
    label: "SCRIBBLEPAD",
    title: "Private Cognition",
    description: "The disconnected state. A safe harbor for raw, messy, incoherent exploration.",
    icon: PenTool,
  },
  {
    id: "03",
    label: "EXECUTION_SPINE",
    title: "Causal Chains",
    description: "Every task traces back to a decision. We do not move without a why.",
    icon: CheckSquare,
  },
  {
    id: "04",
    label: "AI_LAYER",
    title: "Silent Operator",
    description: "An intelligence that observes but never interrupts. Connecting the unseen.",
    icon: Sparkles,
  }
];

export function FeatureGrid() {
  return (
    <div className="py-32 px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Geometry */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="text-[10px] text-indigo-400 font-mono tracking-[0.2em] uppercase mb-6">Fig. 02 — System Architecture</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-6">
            Five Core <span className="text-zinc-600">Surfaces.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg leading-relaxed font-light">
            We stripped away the noise. What remains is the minimum viable structure for high-functioning intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-[#050505] p-12 md:p-16 hover:bg-[#080808] transition-colors duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />

              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-indigo-400 transition-colors tracking-widest">
                  {feature.id} / {feature.label}
                </span>
                <feature.icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm group-hover:text-zinc-400 transition-colors">
                {feature.description}
              </p>

              {/* Corner Marker */}
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-zinc-800 group-hover:border-indigo-500/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
