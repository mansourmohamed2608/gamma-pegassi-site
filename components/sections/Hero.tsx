"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HeroMotionExperiment } from "@/components/visuals/HeroMotionExperiment";
import { HeroStaticVisual } from "@/components/visuals/HeroStaticVisual";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 22 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_44%,rgba(213,224,229,0.08),transparent_30%),linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.96)_42%,rgba(5,6,7,0.18)_100%)]" />
      <div className="absolute inset-y-20 right-0 w-full opacity-40 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] sm:opacity-55 lg:w-[58%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_18%)]">
        {site.heroVisualMode === "motion" ? <HeroMotionExperiment /> : <HeroStaticVisual />}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={initial} animate={animate} transition={{ duration: 0.55 }}>
            <SectionLabel>Gamma Pegassi / Dubai</SectionLabel>
          </motion.div>
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.07 }}
            className="metal-text max-w-3xl text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em]"
          >
            Software, AI & Game Development.
          </motion.h1>
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.14 }}
            className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            A Dubai-based technology studio turning business and creative ideas into practical,
            maintainable digital products.
          </motion.p>
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.68, delay: 0.21 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="secondary">
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-4 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/38 sm:left-6 sm:flex lg:left-8">
        <span className="h-px w-10 bg-white/25" />
        Scroll to explore
      </div>
    </section>
  );
}
