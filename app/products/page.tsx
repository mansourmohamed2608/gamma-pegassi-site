import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChromeAccent } from "@/components/visuals/ChromeAccent";
import { productLab, tash8eelAi } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "The Gamma Pegassi product lab researches and builds focused SaaS products from repeated operational problems.",
  path: "/products",
});

const problemAreas = [
  "Manual workflows that slow teams down",
  "Internal approvals and handoffs that need clearer systems",
  "Dashboards that turn scattered information into action",
  "Automation opportunities with measurable business value",
];

const buildRules = [
  "The problem appears repeatedly across teams or industries",
  "The software can stay focused instead of becoming a bloated platform",
  "The product improves a real workflow, not just a demo flow",
  "The first version can be validated honestly before public launch",
];

const productPrinciples = [
  "Clear scope",
  "Fast workflows",
  "Maintainable foundations",
  "Useful automation",
  "Transparent launch status",
];

export default function ProductsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Products</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              Our product lab turns repeated problems into SaaS products.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
              Gamma Pegassi also builds its own software products. Product work stays clearly
              labeled by status, and public launches will be announced only when they are ready.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <ChromeAccent className="-right-24 top-12 hidden lg:block" variant="sheet" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Card className="overflow-hidden p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-64 bg-[radial-gradient(circle_at_top_right,rgba(189,238,255,0.14),transparent_62%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                    {tash8eelAi.label}
                  </p>
                  <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
                    {tash8eelAi.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/66">{tash8eelAi.detail}</p>
                  <p className="mt-5 rounded-md border border-accent/20 bg-accent/10 px-4 py-3 text-sm font-semibold text-ice">
                    {tash8eelAi.note}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-white/62">{tash8eelAi.description}</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {tash8eelAi.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-sm leading-6 text-white/66"
                      >
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>SaaS Products In Development</SectionLabel>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productLab.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                    {item.label}
                  </p>
                  <h2 className="mt-5 text-2xl font-bold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <InfoList title="Problems We Like Solving" items={problemAreas} />
          <InfoList title="How We Decide What To Build" items={buildRules} />
          <InfoList title="Product Principles" items={productPrinciples} />
        </div>
      </section>
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <Card className="h-full">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <p key={item} className="border-b border-white/10 pb-3 text-sm leading-7 text-white/62 last:border-0 last:pb-0">
              {item}
            </p>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
