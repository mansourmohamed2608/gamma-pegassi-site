import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { tash8eelAi } from "@/lib/site";

export function ProductLab() {
  return (
    <section className="border-y border-white/10 bg-white/[0.018] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Selected product / verified status</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/68">
                <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
                {tash8eelAi.label}
              </div>
              <h2 className="metal-text mt-8 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl">
                {tash8eelAi.name}
              </h2>
              <p className="mt-5 max-w-md text-xl leading-8 text-white/75">{tash8eelAi.title}</p>
            </div>

            <div className="border-l border-white/12 pl-6 sm:pl-10">
              <p className="max-w-2xl text-xl leading-9 text-white/66">{tash8eelAi.detail}</p>
              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                {tash8eelAi.statusGroups.slice(0, 2).map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                      {group.label}
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/60">
                      {group.items.slice(0, 2).map((item) => (
                        <li key={item} className="border-t border-white/10 pt-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-accent"
              >
                View product status
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
