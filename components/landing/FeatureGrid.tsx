"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PenTool, CheckSquare, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    title: "Shared Board",
    description: "The canonical reality. A finite space for curated ideas, decisions, and constraints.",
    icon: LayoutDashboard,
    className: "md:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Scribblepad",
    description: "Private thinking space. Messy, safe, and disconnected until you are ready.",
    icon: PenTool,
    className: "md:col-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Execution Spine",
    description: "Tasks that trace back to their origin. Every action has a why.",
    icon: CheckSquare,
    className: "md:col-span-1",
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    title: "AI Layer",
    description: "A silent operator. It observes, connects, and suggests. It never interrupts.",
    icon: Sparkles,
    className: "md:col-span-2",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function FeatureGrid() {
  return (
    <div className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The System Model</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Thinking is private by default. Reality is curated. Memory is permanent.
            Everything flows through five core surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:bg-zinc-900 transition-colors",
                feature.className
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", feature.gradient)} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
