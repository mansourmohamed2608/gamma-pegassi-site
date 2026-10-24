import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="hairline-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">404 / Not found</p>
        <h1 className="metal-text mt-6 max-w-4xl text-balance text-6xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-8xl">
          This route has no destination.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
          The page may have moved, or the address may be incomplete.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/75 bg-ice px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return home
        </Link>
      </div>
    </section>
  );
}
