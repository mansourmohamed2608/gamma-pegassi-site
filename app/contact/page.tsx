import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Book a call with Gamma Pegassi or send a static inquiry for a software project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-6xl">
              Book a call with Gamma Pegassi.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
              Share the product, platform, dashboard, automation, or workflow you want to build.
              The first step is a clear conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div className="grid gap-4">
              <Info icon={<MapPin className="h-5 w-5" />} label="Location" value={site.location} />
              <Info icon={<MapPin className="h-5 w-5" />} label="Public address" value={site.publicAddress} />
              <Info icon={<Mail className="h-5 w-5" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <Info icon={<CalendarDays className="h-5 w-5" />} label="Booking" value={site.calendlyUrl ? "Calendly embed available" : "Use the inquiry form or email"} />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {site.calendlyUrl ? (
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
                <iframe
                  src={site.calendlyUrl}
                  title="Book a call with Gamma Pegassi"
                  className="h-[760px] w-full"
                />
              </div>
            ) : (
              <Card>
                <SectionLabel>Booking</SectionLabel>
                <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
                  Start with a short project note.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  Send the essentials and Gamma Pegassi will reply with the clearest next step and
                  available call times.
                </p>
              </Card>
            )}
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Inquiry</SectionLabel>
            <p className="mb-6 max-w-3xl text-sm leading-7 text-white/58">
              Use the inquiry form if you want to send project context first. Use the Book a Call
              button if you already have a Calendly link configured.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
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
    <Card>
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-accent">
          {icon}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">{label}</p>
          {href ? (
            <a href={href} className="mt-2 block text-lg font-semibold text-white transition hover:text-accent">
              {value}
            </a>
          ) : (
            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
