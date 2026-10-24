import { positioningStrip } from "@/lib/site";

export function PositioningStrip() {
  return (
    <section aria-label="Company positioning" className="border-b border-white/10 bg-white/[0.018]">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
        {positioningStrip.map((item) => (
          <span
            key={item}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
