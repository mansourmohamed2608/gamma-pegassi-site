import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden border-y border-white/15 py-12 sm:py-16">
          <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                Next Step
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
                Bring us the problem. We’ll shape the clearest next step.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/66">
                Tell us what you are building, improving, or exploring.
              </p>
            </div>
            {site.calendlyUrl ? (
              <Button href="/contact">View Booking Options</Button>
            ) : (
              <Button href="/contact">Discuss Your Project</Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
