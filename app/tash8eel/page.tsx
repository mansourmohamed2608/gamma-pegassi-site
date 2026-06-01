import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChromeAccent } from "@/components/visuals/ChromeAccent";
import { pageMetadata } from "@/lib/seo";
import { tash8eelAi, tash8eelLandingSections, tash8eelPublicLinks } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tash8eel AI",
  description:
    "Tash8eel AI is an AI-driven merchant operating system for restaurants, retailers, and multi-branch teams.",
  path: "/tash8eel",
});

const connectedAreas = [
  "WhatsApp",
  "Messenger",
  "Instagram",
  "Orders",
  "POS and cashier workflows",
  "Inventory",
  "Finance",
  "Reports",
  "Calls",
  "Automation",
];

export default function Tash8eelPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <ChromeAccent className="-right-24 top-20 hidden lg:block" variant="sheet" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>{tash8eelAi.label}</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              Tash8eel AI
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/70">
              AI-driven merchant operations for restaurants, retailers, and multi-branch teams.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/58">
              {tash8eelAi.description}
            </p>
            <a
              href={tash8eelAi.appUrl}
              className="mt-9 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent/50 bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition duration-300 hover:bg-ice focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>Open Tash8eel AI</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Connected Operations</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              One public product surface for merchant workflow review.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {connectedAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/68"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tash8eelLandingSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.035}>
              <Card className="h-full">
                <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-bold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{section.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Card className="p-8 sm:p-10">
              <SectionLabel>Public Documents</SectionLabel>
              <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
                Review and data handling links.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Tash8eel AI is operated by {tash8eelAi.operator}, {tash8eelAi.ownerLocation}.
                These public pages support product review, merchant evaluation, and authorized
                data requests.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {tash8eelPublicLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/72 transition hover:border-accent/40 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
