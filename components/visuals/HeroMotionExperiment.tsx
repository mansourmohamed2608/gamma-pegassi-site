"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  top: 18 + ((index * 13) % 62),
  left: 10 + ((index * 19) % 78),
  delay: index * 0.12,
}));

export function HeroMotionExperiment() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-lg border border-white/10 bg-elevated/35 p-7 shadow-2xl shadow-black/40">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-engine-grid bg-[length:44px_44px] opacity-[0.13]"
        animate={{ backgroundPosition: ["0px 0px", "44px 22px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-20%] top-1/4 h-px w-[140%] bg-gradient-to-r from-transparent via-accent/55 to-transparent"
        animate={{ x: ["-25%", "25%"], opacity: [0.12, 0.55, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-12 rounded-full border border-accent/15"
        animate={{ scale: [0.96, 1.03, 0.96], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          aria-hidden="true"
          className="absolute h-1 w-1 rounded-full bg-accent/70"
          style={{ top: `${particle.top}%`, left: `${particle.left}%` }}
          animate={{ x: [0, 34, 0], opacity: [0, 0.65, 0] }}
          transition={{
            duration: 4.8,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative flex h-full items-center justify-center">
        <motion.div
          aria-hidden="true"
          className="absolute h-[62%] w-[62%] rounded-full bg-accent/10 blur-3xl"
          animate={{ opacity: [0.38, 0.68, 0.38], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.018, 1] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.35 },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-10 flex h-[58%] w-[58%] items-center justify-center"
        >
          <Image
            src={site.logo.mark}
            alt="Gamma Pegassi Pegasus wing mark"
            width={340}
            height={340}
            priority
            className="h-full w-full object-contain drop-shadow-[0_0_34px_rgba(189,238,255,0.24)]"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.26em] text-white/50">
        <span>Dubai</span>
        <span>Software Systems</span>
      </div>
    </div>
  );
}

function StaticFallback() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-lg border border-white/10 bg-elevated/35 p-7">
      <div className="absolute inset-0 bg-engine-grid bg-[length:44px_44px] opacity-[0.13]" />
      <div className="relative flex h-full items-center justify-center">
        <Image
          src={site.logo.mark}
          alt="Gamma Pegassi Pegasus wing mark"
          width={340}
          height={340}
          priority
          className="h-[58%] w-[58%] object-contain"
        />
      </div>
    </div>
  );
}
