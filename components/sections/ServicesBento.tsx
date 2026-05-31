import { services } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesBento() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              Practical software work for serious product and operations teams.
            </h2>
            <p className="text-lg leading-8 text-white/62">
              Gamma Pegassi builds the systems behind a sharper business: MVPs, portals,
              dashboards, automations, integrations, and the maintenance needed after launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <Card className={index === 0 || index === 3 ? "lg:min-h-72" : "lg:min-h-64"}>
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
