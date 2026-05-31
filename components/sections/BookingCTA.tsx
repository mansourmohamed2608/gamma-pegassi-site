import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(120,223,255,0.10),rgba(255,255,255,0.035)_42%,rgba(255,255,255,0.02))] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                Next Step
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl">
                Have a product, platform, or workflow you want to build?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/66">
                Book a short call and we’ll map the clearest next step.
              </p>
            </div>
            {site.calendlyUrl ? (
              <Button href="/contact">Open Booking Page</Button>
            ) : (
              <Button href="/contact">Book a Call</Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
