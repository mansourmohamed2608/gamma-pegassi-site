import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { tash8eelPublicLinks } from "@/lib/site";

type LegalPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
};

export function LegalPage({ label, title, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
            <h1 className="text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.025}>
              <Card>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-white/64">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-wrap gap-3 pt-4">
              {tash8eelPublicLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/68 transition hover:border-accent/40 hover:text-white"
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
