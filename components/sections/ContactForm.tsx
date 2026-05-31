import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const projectTypes = [
  "SaaS MVP",
  "Web platform",
  "Dashboard",
  "Automation",
  "AI workflow",
  "Maintenance",
];

export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-6">
      {/* TODO: Connect this static form to Formspree, Tally, a custom VPS endpoint, or an email service provider. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" />
        <Field label="Email" name="email" type="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Project type
          <select
            name="projectType"
            className="h-12 rounded-md border border-white/10 bg-black/25 px-3 text-white outline-none transition focus:border-accent"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" name="budget" />
        <Field label="Timeline" name="timeline" />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/78">
        Message
        <textarea
          name="message"
          rows={6}
          className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-accent"
          placeholder="Tell us what you want to build."
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-white/45">
          For now, send the inquiry by email with the project details included.
        </p>
        <Button href={`mailto:${site.email}`}>Email Inquiry</Button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white/78">
      {label}
      <input
        name={name}
        type={type}
        className="h-12 rounded-md border border-white/10 bg-black/25 px-3 text-white outline-none transition placeholder:text-white/35 focus:border-accent"
      />
    </label>
  );
}
