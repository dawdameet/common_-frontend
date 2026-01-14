"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Observer",
    price: "0",
    period: "/mo",
    description: "For those who watch. Access to public thought streams and community signals.",
    features: [
      "Public Board Access",
      "Read-Only API",
      "Community Signals",
      "Basic Search"
    ],
    cta: "Join Network",
    highlight: false
  },
  {
    name: "Architect",
    price: "10",
    period: "/mo",
    description: "For those who build. Full control over private cognition and system architecture.",
    features: [
      "Unlimited Private Boards",
      "Full API Access",
      "AI Synthesis Layer",
      "Priority Signal Processing",
      "Collaborative Workspaces"
    ],
    cta: "Initialize Pro",
    highlight: true
  },
  {
    name: "Protocol",
    price: "Custom",
    period: "",
    description: "For large networks. Dedicated infrastructure and sovereign data enclaves.",
    features: [
      "Sovereign Instance",
      "SSO & Audit Logs",
      "Dedicated Support",
      "Unlimited Retention",
      "Custom SLA"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

export function Pricing() {
  return (
    <div className="py-20 px-6 md:py-32 md:px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-[10px] text-indigo-400 font-mono tracking-[0.2em] uppercase mb-4 block">Fig. 03 — Exchange</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white">
              Value <span className="text-zinc-600">Structure.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed font-light text-right md:text-left">
            Simple, deterministic pricing. No hidden variables. You pay for the signal, not the noise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative p-8 border ${plan.highlight ? 'border-indigo-500/30 bg-indigo-500/[0.02]' : 'border-white/10 bg-white/[0.02]'} flex flex-col justify-between group hover:border-white/20 transition-colors duration-500`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-lg font-light tracking-widest uppercase text-white">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-light text-white tracking-tighter">
                    {plan.price === "Custom" ? "" : "$"}{plan.price}
                  </span>
                  {plan.period && <span className="text-zinc-500 font-mono text-sm">{plan.period}</span>}
                </div>

                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-12 border-b border-white/5 pb-8 min-h-[100px]">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                      <Check className={`w-4 h-4 ${plan.highlight ? 'text-indigo-400' : 'text-zinc-600'}`} />
                      <span className="font-light tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 border ${
                plan.highlight 
                  ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-100 hover:bg-indigo-500/20' 
                  : 'bg-transparent border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
              }`}>
                {plan.cta}
              </button>

               {/* Decorative Corners */}
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}