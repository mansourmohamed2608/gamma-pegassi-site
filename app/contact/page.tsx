import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Discuss a software, AI, business-system, game-development, or technical collaboration project with Gamma Pegassi in Dubai.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:px-8">
        <div className="hairline-grid absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="metal-text max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Let’s give the idea a clear next step.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              Share the problem, audience, constraints, and intended outcome. Gamma Pegassi will
              respond with the most useful way to continue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Project inquiry</SectionLabel>
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
                Start with the essentials.
              </h2>
              <div className="mt-9 border-t border-white/12">
                <Info icon={<MapPin className="h-4 w-4" />} label="Location" value={site.location} />
                <Info icon={<Mail className="h-4 w-4" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <Info
                  icon={<CalendarDays className="h-4 w-4" />}
                  label="Conversation"
                  value={site.calendlyUrl ? "Online booking available" : "Reply with suitable call times"}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {site.calendlyUrl ? (
        <section className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionLabel>Book a conversation</SectionLabel>
              <div className="mt-8 overflow-hidden rounded-sm border border-white/12 bg-white">
                <iframe
                  src={site.calendlyUrl}
                  title="Book a call with Gamma Pegassi"
                  className="h-[760px] w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-3 border-b border-white/12 py-5">
      <span className="text-accent/70">{icon}</span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">{label}</p>
        {href ? (
          <a href={href} className="mt-2 block text-sm font-semibold text-white transition hover:text-accent">
            {value}
          </a>
        ) : (
          <p className="mt-2 text-sm font-semibold text-white">{value}</p>
        )}
      </div>
    </div>
  );
}
