"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HeroMotionExperiment } from "@/components/visuals/HeroMotionExperiment";
import { HeroStaticVisual } from "@/components/visuals/HeroStaticVisual";
import { ChromeAccent } from "@/components/visuals/ChromeAccent";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 22 };
  const animate = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-[calc(100vh-2rem)] overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(120,223,255,0.10),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.05),transparent_26%)]" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <ChromeAccent className="-right-24 top-28 hidden lg:block" variant="sheet" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div initial={initial} animate={animate} transition={{ duration: 0.6 }}>
            <SectionLabel>Dubai software studio</SectionLabel>
          </motion.div>
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.08 }}
            className="max-w-4xl text-balance text-5xl font-extrabold leading-[0.96] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
          >
            Software, AI, and business systems built with clarity.
          </motion.h1>
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68"
          >
            Gamma Pegassi is a Dubai-based technology startup and software studio building
            practical software systems, AI-assisted workflows, and SaaS products for teams that
            need reliable digital operations.
          </motion.p>
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact">Book a Call</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.heroVisualMode === "motion" ? <HeroMotionExperiment /> : <HeroStaticVisual />}
        </motion.div>
      </div>
    </section>
  );
}
