import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeServices } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesBento() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Four ways to build</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              One studio across technical and creative work.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/60 lg:justify-self-end">
              Strategy, product thinking, engineering, and testing stay connected from the first
              useful prototype to launch and improvement.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-white/12">
          {homeServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <Link
                  href={service.href}
                  className="group grid gap-5 border-b border-white/12 py-7 transition hover:border-white/30 sm:grid-cols-[4rem_1fr_1.2fr_auto] sm:items-center sm:py-9"
                >
                  <span className="text-xs font-bold tracking-[0.24em] text-white/35">
                    {service.number}
                  </span>
                  <span className="flex items-center gap-4">
                    <Icon className="h-5 w-5 text-accent/75" aria-hidden="true" />
                    <span className="text-xl font-bold text-white sm:text-2xl">{service.title}</span>
                  </span>
                  <span className="max-w-xl text-sm leading-7 text-white/55">
                    {service.description}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
