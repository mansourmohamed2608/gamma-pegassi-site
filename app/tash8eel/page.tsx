import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/seo";
import { tash8eelAi, tash8eelLandingSections, tash8eelPublicLinks } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tash8eel AI",
  description:
    "Tash8eel AI is a pilot-ready merchant operations MVP for restaurants, retailers, and multi-branch teams.",
  path: "/tash8eel",
});

export default function Tash8eelPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>{tash8eelAi.label}</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-6xl font-extrabold leading-[0.92] tracking-[-0.06em] sm:text-8xl lg:text-9xl">
              Tash8eel AI
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
              {tash8eelAi.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/54">
              {tash8eelAi.description}
            </p>
            {tash8eelAi.appUrl ? (
              <a
                href={tash8eelAi.appUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/75 bg-ice px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <span>Visit Product Application</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href="/contact"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/75 bg-ice px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <span>Discuss a Pilot</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Current product direction</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
                Merchant operations in one connected layer.
              </h2>
              <div>
                <p className="text-xl leading-9 text-white/66">{tash8eelAi.detail}</p>
                <p className="mt-6 text-xs leading-6 text-white/42">{tash8eelAi.note}</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-3">
            {tash8eelAi.statusGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.04}>
                <div className="h-full border-b border-r border-white/12 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">
                    {group.label}
                  </p>
                  <ul className="mt-6 grid gap-4 text-sm leading-6 text-white/62">
                    {group.items.map((item) => (
                      <li key={item} className="border-t border-white/10 pt-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Product review</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Scope and operating model.
            </h2>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-white/12 md:grid-cols-2 lg:grid-cols-3">
            {tash8eelLandingSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.035}>
                <article className="h-full border-b border-r border-white/12 p-7 sm:p-8">
                  <CheckCircle2 className="h-5 w-5 text-accent/70" aria-hidden="true" />
                  <h3 className="mt-10 text-xl font-bold text-white">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{section.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Public documents</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
              Review and data-handling information.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58">
              Tash8eel AI is operated by {tash8eelAi.operator}, {tash8eelAi.ownerLocation}. These
              pages support product review and authorized data requests.
            </p>
            <div className="mt-8 grid border-l border-t border-white/12 sm:grid-cols-3">
              {tash8eelPublicLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-r border-white/12 p-5 text-sm font-semibold text-white/68 transition hover:bg-white/[0.025] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
