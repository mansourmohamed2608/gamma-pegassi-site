import type { Metadata } from "next";
import { ArrowDownRight, Check, Crosshair } from "lucide-react";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gameServices } from "@/lib/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Game design, prototyping, gameplay systems, implementation, testing, and performance optimization from Gamma Pegassi in Dubai.";

export const metadata: Metadata = pageMetadata({
  title: "Game Development Studio",
  description,
  path: "/game-development",
});

export default function GameDevelopmentPage() {
  const jsonLd = serviceJsonLd({
    name: "Game Development Studio",
    description,
    path: "/game-development",
    serviceTypes: [
      "Game design and prototyping",
      "Gameplay programming",
      "Level implementation",
      "Game testing and optimization",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[82svh] overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="hairline-grid absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_72%_50%,black,transparent_52%)]" />
        <div className="absolute right-[-12rem] top-1/2 hidden h-[48rem] w-[48rem] -translate-y-1/2 rounded-full border border-white/10 lg:block">
          <div className="absolute inset-20 rounded-full border border-white/10" />
          <div className="absolute inset-40 rounded-full border border-white/15" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <Crosshair className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-accent/35" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(82svh-9rem)] max-w-7xl items-center">
          <Reveal>
            <SectionLabel>Game Development Studio</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-6xl font-extrabold leading-[0.88] tracking-[-0.06em] sm:text-8xl lg:text-[8.5rem]">
              From concept to playable.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Prototyping, gameplay systems, design implementation, testing, and optimization for
              teams building interactive experiences.
            </p>
            <a
              href="#capabilities"
              className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-accent"
            >
              Explore capabilities
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Studio capabilities</SectionLabel>
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
                Focused support across the playable experience.
              </h2>
              <p className="max-w-xl text-base leading-8 text-white/58 lg:justify-self-end">
                Engagements can begin with a prototype, a specific system, an implementation gap,
                or a defined testing and optimization brief.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-l border-t border-white/12 md:grid-cols-2 lg:grid-cols-3">
            {gameServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.035}>
                  <article className="group h-full border-b border-r border-white/12 p-7 transition hover:bg-white/[0.025] sm:p-9">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-accent/75" aria-hidden="true" />
                      <span className="text-xs font-bold tracking-[0.22em] text-white/30">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-16 text-2xl font-bold tracking-[-0.02em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/56">{service.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionLabel>Experience Behind the Studio</SectionLabel>
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Relevant experience, credited accurately.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-l border-white/15 pl-6 sm:pl-10">
              <p className="text-xl leading-9 text-white/72">
                Our team members bring game-development experience from projects completed
                independently or with previous teams. This prior work represents individual
                experience and is credited separately from projects delivered by Gamma Pegassi.
              </p>
              <p className="mt-7 text-sm leading-7 text-white/48">
                No individual project entries are published here until titles, roles, production
                context, and permission-safe visuals can be verified for public use.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Project fit</SectionLabel>
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Define the experience before the stack.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              Engine, language, target platform, content pipeline, and performance goals are
              selected against the actual brief, with the production approach documented as part
              of project scoping.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="border-t border-white/12">
              {[
                "A clear player experience or prototype question",
                "Defined ownership between creative and technical teams",
                "Milestones that produce testable builds",
                "A validation plan for mechanics, usability, and performance",
              ].map((item) => (
                <li key={item} className="flex gap-4 border-b border-white/12 py-5 text-sm leading-7 text-white/64">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent/75" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
