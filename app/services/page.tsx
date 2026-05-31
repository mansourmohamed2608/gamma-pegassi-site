import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChromeAccent } from "@/components/visuals/ChromeAccent";
import { capabilities, detailedDeliverySteps, detailedServices, technologyAreas } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Software services for SaaS MVPs, custom web platforms, dashboards, automation systems, AI workflow integrations, APIs, and scaling.",
  path: "/services",
});

const bestFit = [
  "Founders validating SaaS ideas",
  "Businesses replacing manual workflows",
  "Teams needing dashboards or portals",
  "Companies needing automation",
  "Companies that need reliable software without messy shortcuts",
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              Software services for teams that need systems, not just screens.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
              Gamma Pegassi designs, builds, launches, and improves digital systems for founders
              and operating teams that need clarity, speed, and software that remains maintainable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <ChromeAccent className="-right-24 top-8 hidden lg:block" variant="arc" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              Capabilities across software, AI, and operations.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
              Gamma Pegassi combines digital development, engineering, consulting, and ongoing
              support into one practical delivery model.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.title} delay={index * 0.035}>
                  <Card className="h-full">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-white">{capability.title}</h3>
                    <ul className="mt-5 grid gap-3">
                      {capability.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-white/62">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={`${service.title}-${index}`} delay={index * 0.035}>
                <Card className="h-full">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold text-white">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Best Fit For</SectionLabel>
            <div className="grid gap-3">
              {bestFit.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-white/72">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel>Technology Areas</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
              Technology areas we work with.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Our work spans modern frontend, backend, AI, data, database, DevOps, and monitoring
              tools. The stack is selected based on the product, team, and operational requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.035}>
                <Card className="h-full">
                  <h2 className="text-xl font-bold text-white">{area.title}</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white/64"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Delivery Process</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              How we deliver software work.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detailedDeliverySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.035}>
                <Card className="h-full">
                  <p className="text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{step.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
