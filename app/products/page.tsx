import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { productLab, tash8eelAi } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Explore Tash8eel AI and the Gamma Pegassi product lab, with current maturity and product direction stated clearly.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Product lab</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Focused products for operational problems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              Gamma Pegassi develops its own software alongside client work. Product maturity,
              pilot scope, and future direction stay visibly separated.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/68">
                  <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
                  {tash8eelAi.label}
                </div>
                <h2 className="metal-text mt-8 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl">
                  {tash8eelAi.name}
                </h2>
                <p className="mt-5 max-w-md text-xl leading-8 text-white/75">{tash8eelAi.title}</p>
                <p className="mt-7 max-w-lg text-sm leading-7 text-white/54">
                  {tash8eelAi.description}
                </p>
                <Link
                  href="/tash8eel"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-accent"
                >
                  Review Tash8eel AI
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div>
                <p className="border-l border-white/15 pl-6 text-xl leading-9 text-white/66 sm:pl-10">
                  {tash8eelAi.detail}
                </p>
                <div className="mt-10 grid border-l border-t border-white/12 sm:grid-cols-3">
                  {tash8eelAi.statusGroups.map((group) => (
                    <div key={group.label} className="border-b border-r border-white/12 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">
                        {group.label}
                      </p>
                      <ul className="mt-5 grid gap-4 text-sm leading-6 text-white/62">
                        {group.items.map((item) => (
                          <li key={item} className="border-t border-white/10 pt-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-6 text-white/42">{tash8eelAi.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>How the lab works</SectionLabel>
            <h2 className="max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              Validate the workflow before expanding the product.
            </h2>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-white/12 md:grid-cols-3">
            {productLab.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full border-b border-r border-white/12 p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/38">
                    {item.label}
                  </p>
                  <h3 className="mt-12 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/56">{item.description}</p>
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
