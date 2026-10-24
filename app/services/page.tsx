import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { detailedDeliverySteps, serviceGroups, technologyAreas } from "@/lib/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Custom software, AI and business systems, game development, and dedicated technical collaboration from a Dubai-based studio.";

export const metadata: Metadata = pageMetadata({
  title: "Software, AI & Game Development Services",
  description,
  path: "/services",
});

export default function ServicesPage() {
  const jsonLd = serviceJsonLd({
    name: "Gamma Pegassi Technology Services",
    description,
    path: "/services",
    serviceTypes: [
      "Custom software development",
      "AI and business systems",
      "Game development",
      "Dedicated technical teams",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Technical depth, shaped around the work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              Gamma Pegassi brings software engineering, AI-assisted operations, interactive
              development, and technical collaboration into one clear delivery model.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Core capabilities</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Four service groups. One accountable process.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-white/12">
            {serviceGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.id} delay={index * 0.035}>
                  <article
                    id={group.id}
                    className="scroll-mt-28 border-b border-white/12 py-10 sm:py-14"
                  >
                    <div className="grid gap-8 lg:grid-cols-[0.18fr_0.82fr_1fr]">
                      <div className="flex items-start gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/38">
                        <Icon className="h-5 w-5 text-accent/75" aria-hidden="true" />
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/40">
                          {group.label}
                        </p>
                        <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                          {group.title}
                        </h3>
                        <p className="mt-5 max-w-lg text-sm leading-7 text-white/58">
                          {group.description}
                        </p>
                        {"href" in group && group.href ? (
                          <Link
                            href={group.href}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent"
                          >
                            Explore Game Studio
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        ) : null}
                      </div>
                      <ul className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
                        {group.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 border-b border-white/10 py-4 pr-4 text-sm leading-6 text-white/64 sm:odd:mr-5"
                          >
                            <Check className="mt-1 h-4 w-4 shrink-0 text-accent/75" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Technology areas</SectionLabel>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
                Tools follow the project.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/58">
                Technology choices are made against product requirements, team context, security,
                maintainability, and deployment needs—not a fixed sales stack.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {technologyAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.035}>
                <div className="h-full border-b border-r border-white/10 p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm text-white/58">
                    {area.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {area.note ? (
                    <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-white/42">
                      {area.note}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Delivery process</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Six stages, with room for honest decisions.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {detailedDeliverySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.035}>
                <article className="h-full border-t border-white/12 py-7">
                  <p className="text-xs font-bold tracking-[0.24em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
