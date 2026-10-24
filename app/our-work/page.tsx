import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Gamepad2 } from "lucide-react";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { companyWork } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description:
    "Review verified Gamma Pegassi product work and the distinction between company delivery and individual team experience.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Our work</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Work shown with its real context.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Company products and prior individual experience are credited separately. Status,
              ownership, and maturity stay visible rather than being turned into unsupported case studies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Gamma Pegassi company work</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
                Verified work, without borrowed proof.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/65">
                The entries below are limited to work whose company ownership and public status can be supported.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-white/15">
            {companyWork.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <article className="grid gap-10 border-b border-white/15 py-10 sm:py-14 lg:grid-cols-[0.55fr_1fr]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent/85">
                      {project.label}
                    </p>
                    <h3 className="metal-text mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm font-semibold text-white/70">{project.status}</p>
                  </div>
                  <div className="lg:border-l lg:border-white/15 lg:pl-10">
                    <p className="max-w-2xl text-xl leading-9 text-white/75">{project.description}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                      {project.areas.map((area) => (
                        <li key={area} className="flex gap-2 border-t border-white/15 pt-4 text-sm leading-6 text-white/65">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" aria-hidden="true" />
                          {area}
                        </li>
                      ))}
                    </ul>
                    <Link href={project.href} className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-accent">
                      {project.linkLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <Gamepad2 className="h-6 w-6 text-accent/80" aria-hidden="true" />
            <SectionLabel className="mt-6">Individual team experience</SectionLabel>
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Experience attributed accurately.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-l border-white/20 pl-6 sm:pl-10">
              <p className="text-xl leading-9 text-white/78">
                Our team members bring experience from game projects completed independently or
                with previous teams. These projects represent individual experience and are not
                presented as games developed or released by Gamma Pegassi.
              </p>
              <p className="mt-7 text-sm leading-7 text-white/62">
                Named projects and media will be added only after the contributor’s role, project
                context, technology, status, and permission to display assets are confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
