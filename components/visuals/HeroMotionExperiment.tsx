"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

const signals = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  top: 12 + ((index * 17) % 72),
  left: 10 + ((index * 23) % 78),
  delay: index * 0.18,
}));

export function HeroMotionExperiment() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="relative min-h-[22rem] w-full overflow-hidden sm:min-h-[30rem] lg:min-h-[calc(100svh-5rem)]">
      <div className="hairline-grid absolute inset-0 opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[12%] top-1/2 h-[74%] w-[74%] -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[25%] top-1/2 h-[48%] w-[48%] -translate-y-1/2 rounded-full border border-white/15"
        animate={{ rotate: -360, scale: [0.98, 1.03, 0.98] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity } }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ y: [-110, 140, -110], opacity: [0.12, 0.5, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {signals.map((signal) => (
        <motion.span
          key={signal.id}
          aria-hidden="true"
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{ top: `${signal.top}%`, left: `${signal.left}%` }}
          animate={{ opacity: [0.08, 0.8, 0.08], scale: [1, 2.2, 1] }}
          transition={{ duration: 3.6, delay: signal.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_50%,rgba(213,224,229,0.14),transparent_24%)]" />
      <div className="relative flex h-full min-h-[22rem] items-center justify-center sm:min-h-[30rem] lg:min-h-[calc(100svh-5rem)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: [1, 1.018, 1], rotate: 0 }}
          transition={{
            opacity: { duration: 0.9, delay: 0.25 },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 1.1 },
          }}
          className="relative aspect-square w-[58%] max-w-[32rem]"
        >
          <Image
            src={site.logo.mark}
            alt="Gamma Pegassi Pegasus wing mark"
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 42vw"
            className="object-contain drop-shadow-[0_0_54px_rgba(213,224,229,0.18)]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
        <span>Dubai / UAE</span>
        <span className="hidden sm:inline">Software · AI · Games</span>
      </div>
    </div>
  );
}

function StaticFallback() {
  return (
    <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden sm:min-h-[30rem] lg:min-h-[calc(100svh-5rem)]">
      <div className="hairline-grid absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute h-[64%] w-[64%] rounded-full border border-white/10" />
      <div className="relative aspect-square w-[58%] max-w-[32rem]">
        <Image
          src={site.logo.mark}
          alt="Gamma Pegassi Pegasus wing mark"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 42vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
