"use client";

import React from "react";
import { motion } from "framer-motion";

export function FooterBanner() {
  return (
    <div className="w-full bg-[#050505] overflow-hidden flex justify-center py-24 md:py-40">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 1 }}
        >
           <p className="text-[12vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-white/[0.03] select-none pointer-events-none">
              COMMON_
           </p>
        </motion.div>
    </div>
  );
}
