import { whyPoints } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhyGammaPegassi() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Why Gamma Pegassi</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
            Why teams work with Gamma Pegassi.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.04}>
                <Card>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{point.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
