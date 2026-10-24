import type { Metadata } from "next";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { companyCredentials, principles, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Meet Gamma Pegassi, a Dubai-based technology studio building software, AI-assisted business systems, SaaS products, and interactive experiences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>About Gamma Pegassi</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Engineering discipline. Creative range. Clear collaboration.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              Gamma Pegassi is a {site.location}-based technology studio building custom software,
              intelligent business systems, SaaS products, and interactive game experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              A young studio built for considered, long-term work.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-l border-white/15 pl-6 sm:pl-10">
              <p className="text-xl leading-9 text-white/70">
                Founded in {site.founded}, Gamma Pegassi connects product thinking, interface
                design, engineering, automation, and technical quality in one working process.
              </p>
              <p className="mt-7 text-base leading-8 text-white/54">
                The aim is straightforward: understand the real need, define a useful scope,
                build it carefully, and leave clients with software that can be understood,
                operated, and improved.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Principles that show up in the work.
            </h2>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 0.035}>
                <div className="flex min-h-40 flex-col justify-between border-b border-r border-white/12 p-6 sm:p-8">
                  <span className="text-xs font-bold tracking-[0.22em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-10 text-xl font-bold text-white">{principle}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Company credentials</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Established in Dubai, positioned for technical work.
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-white/12">
            {companyCredentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <Reveal key={credential.title} delay={index * 0.04}>
                  <div className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:items-start sm:py-9">
                    <Icon className="h-5 w-5 text-accent/75" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white">{credential.title}</h3>
                    <p className="text-sm leading-7 text-white/58">{credential.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
