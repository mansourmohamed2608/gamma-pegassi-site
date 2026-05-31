import { positioningStrip } from "@/lib/site";

export function PositioningStrip() {
  return (
    <section aria-label="Company positioning" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
        {positioningStrip.map((item) => (
          <span
            key={item}
            className="text-xs font-bold uppercase tracking-[0.22em] text-white/58"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
