import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChromeAccent } from "@/components/visuals/ChromeAccent";
import { companyCredentials, principles, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Gamma Pegassi, a Dubai-based technology startup founded in February 2025 and focused on software services and SaaS products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              A Dubai-based software studio building practical systems for modern teams.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
              Gamma Pegassi is based in {site.location}. Founded in {site.founded}, it is a
              technology startup and software studio focused on practical software systems,
              AI-assisted workflows, and SaaS products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <ChromeAccent className="-left-24 top-10 hidden lg:block" variant="arc" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Company Credentials</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              Dubai-based, legally established, and built for long-term work.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {companyCredentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <Reveal key={credential.title} delay={index * 0.04}>
                  <Card className="h-full">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-white">{credential.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      {credential.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full">
              <SectionLabel>Mission</SectionLabel>
              <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white">
                To build practical software systems that help teams move faster, operate clearer,
                and scale with less chaos.
              </h2>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <SectionLabel>Principles</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-md border border-white/10 bg-black/18 p-4 text-sm font-semibold text-white/75"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Company Shape</SectionLabel>
            <p className="text-2xl leading-10 text-white/72">
              Gamma Pegassi is new by design and honest about it. The site does not claim fake
              clients, fake metrics, fake awards, or a long history. The focus is on the work:
              building useful, maintainable software systems with clear communication.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
