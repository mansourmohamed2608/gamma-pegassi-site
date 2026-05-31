import { productLab } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProductLab() {
  return (
    <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionLabel>Product Lab</SectionLabel>
          <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
            Repeated business problems become focused software products.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            Alongside client work, Gamma Pegassi builds its own SaaS products. Our product lab
            turns repeated business problems into focused software products. Public launches will
            be announced as they mature.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {productLab.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
                  </div>
                  <div className="h-16 min-w-28 overflow-hidden rounded-md border border-white/10 bg-black/20">
                    <div className="h-full w-full bg-[linear-gradient(135deg,rgba(189,238,255,0.18),transparent_44%),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_12px)]" />
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
