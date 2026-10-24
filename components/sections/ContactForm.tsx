"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Check, Copy, LoaderCircle } from "lucide-react";
import { site } from "@/lib/site";

const projectTypes = [
  "Custom software",
  "AI or business automation",
  "Game development",
  "Dedicated technical team",
  "Product maintenance",
  "Something else",
];

const timelineOptions = [
  "Exploring options",
  "Within 1–3 months",
  "Within 3–6 months",
  "More than 6 months",
  "Not sure yet",
];

type Status = { tone: "idle" | "info" | "success" | "error"; message: string };

function inquiryFrom(form: HTMLFormElement) {
  const data = new FormData(form);
  const value = (name: string) => String(data.get(name) ?? "").trim();
  const name = value("name");
  const email = value("email");
  const company = value("company") || "Not provided";
  const projectType = value("projectType");
  const timeline = value("timeline");
  const message = value("message");
  const subject = `${projectType} inquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Project type: ${projectType}`,
    `Expected timeline: ${timeline}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  return { data, subject, body };
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ tone: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const hasProvider = Boolean(site.contactFormEndpoint);

  function validate(form: HTMLFormElement) {
    if (form.checkValidity()) return true;
    form.reportValidity();
    setStatus({
      tone: "error",
      message: "Please complete every required field and check the highlighted values.",
    });
    return false;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!validate(form) || isSubmitting) return;

    const { data, subject, body } = inquiryFrom(form);
    if (!hasProvider) {
      setStatus({
        tone: "info",
        message: "Email draft prepared. Review and send it in your email app; nothing has been sent yet.",
      });
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setIsSubmitting(true);
    setStatus({ tone: "info", message: "Sending your inquiry…" });
    data.append("_subject", subject);
    data.append("source", site.url);

    try {
      const response = await fetch(site.contactFormEndpoint!, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);
      form.reset();
      setStatus({
        tone: "success",
        message: "Your inquiry was received. Gamma Pegassi will follow up by email.",
      });
    } catch {
      setStatus({
        tone: "error",
        message: `The form could not be delivered. Your information is still here—please try again or email ${site.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function copyProjectNote() {
    const form = formRef.current;
    if (!form || !validate(form)) return;
    const { subject, body } = inquiryFrom(form);

    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setStatus({
        tone: "info",
        message: "Project note copied. Paste it into your preferred email app; nothing has been sent yet.",
      });
    } catch {
      setStatus({
        tone: "error",
        message: `Copying was blocked by your browser. Please email the details directly to ${site.email}.`,
      });
    }
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="grid gap-6 border-t border-white/20 pt-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" maxLength={100} required />
        <Field label="Email" name="email" type="email" autoComplete="email" maxLength={254} required />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" maxLength={120} />
        <label className="grid gap-2 text-sm font-semibold text-white/85">
          <span>Project type <span className="text-white/60">(required)</span></span>
          <select
            name="projectType"
            required
            defaultValue=""
            className="h-12 rounded-sm border border-white/20 bg-[#080a0c] px-3 text-white outline-none transition focus:border-accent"
          >
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/85">
        <span>Expected timeline <span className="text-white/60">(required)</span></span>
        <select
          name="timeline"
          required
          defaultValue=""
          className="h-12 rounded-sm border border-white/20 bg-[#080a0c] px-3 text-white outline-none transition focus:border-accent"
        >
          <option value="" disabled>Select an expected timeline</option>
          {timelineOptions.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-white/85">
        <span>Project description <span className="text-white/60">(required)</span></span>
        <textarea
          name="message"
          rows={7}
          required
          minLength={20}
          maxLength={4000}
          className="rounded-sm border border-white/20 bg-black/25 px-3 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-accent"
          placeholder="What are you building, who is it for, and what would a useful outcome look like?"
        />
      </label>

      <label className="absolute -left-[9999px]" aria-hidden="true">
        Leave this field empty
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-5 border-t border-white/10 pt-6">
        <p
          role={status.tone === "error" ? "alert" : "status"}
          aria-live="polite"
          className={status.tone === "error" ? "text-sm leading-6 text-red-300" : "text-sm leading-6 text-white/65"}
        >
          {status.message || (hasProvider
            ? "Your details are sent only when you submit this form."
            : "No submission provider is configured. Prepare Email opens a draft; it does not send automatically.")}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/75 bg-ice px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-wait disabled:opacity-65"
          >
            {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : hasProvider ? <Check className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
            {isSubmitting ? "Sending…" : hasProvider ? "Send Inquiry" : "Prepare Email"}
          </button>
          {!hasProvider ? (
            <button
              type="button"
              onClick={copyProjectNote}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy Project Note
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, maxLength, required = false }: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  maxLength: number;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white/85">
      <span>{label} {required ? <span className="text-white/60">(required)</span> : null}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="h-12 rounded-sm border border-white/20 bg-black/25 px-3 text-white outline-none transition focus:border-accent"
      />
    </label>
  );
}
