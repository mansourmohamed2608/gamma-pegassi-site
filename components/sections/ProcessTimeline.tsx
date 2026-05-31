"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProcessTimeline() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
            Understand → Design → Build → Launch → Improve
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            The process is designed to keep momentum high without hiding ambiguity. Each step
            narrows risk and makes the next decision clearer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10" />
          <motion.div
            className="absolute left-5 top-0 w-px origin-top bg-accent"
            style={{ bottom: 0, scaleY: reduceMotion ? 1 : scaleY }}
          />
          <div className="grid gap-6">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 bg-surface text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
