"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const projectTypes = [
  "Custom software",
  "AI or business automation",
  "Game development",
  "Dedicated technical team",
  "Product maintenance",
  "Something else",
];

type Status = { tone: "idle" | "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ tone: "idle", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({
        tone: "error",
        message: "Please complete the required name, email, project type, and message fields.",
      });
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim() || "Not provided";
    const projectType = String(data.get("projectType") ?? "").trim();
    const timeline = String(data.get("timeline") ?? "").trim() || "Not provided";
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`${projectType} inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Project type: ${projectType}`,
        `Timeline: ${timeline}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    );

    setStatus({
      tone: "success",
      message: "Opening your email app with a prefilled message. Review it there, then send.",
    });
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-6 border-t border-white/15 pt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" />
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          Project type <span className="sr-only">(required)</span>
          <select
            name="projectType"
            required
            defaultValue=""
            className="h-12 rounded-sm border border-white/15 bg-[#080a0c] px-3 text-white outline-none transition focus:border-accent"
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Field label="Preferred timeline" name="timeline" placeholder="For example: exploring now, or target month" />
      <label className="grid gap-2 text-sm font-semibold text-white/78">
        Project details <span className="text-white/40">(required)</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={20}
          className="rounded-sm border border-white/15 bg-black/25 px-3 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-accent"
          placeholder="What are you building, who is it for, and what would a useful outcome look like?"
        />
      </label>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p
          role="status"
          aria-live="polite"
          className={status.tone === "error" ? "text-sm text-red-300" : "text-sm text-white/48"}
        >
          {status.message || "Submitting opens your email application; no form data is stored on this website."}
        </p>
        <button
          type="submit"
          className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/75 bg-ice px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Prepare Email
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white/78">
      <span>
        {label} {required ? <span className="text-white/40">(required)</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-12 rounded-sm border border-white/15 bg-black/25 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-accent"
      />
    </label>
  );
}
