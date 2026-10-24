import { whyPoints } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhyGammaPegassi() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Why Gamma Pegassi</SectionLabel>
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Clear decisions make stronger products.
            </h2>
          </div>
        </Reveal>
        <div className="border-t border-white/12">
          {whyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.04}>
                <div className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:items-start sm:py-9">
                  <Icon className="h-5 w-5 text-accent/75" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  <p className="text-sm leading-7 text-white/58">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
