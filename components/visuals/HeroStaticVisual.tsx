import Image from "next/image";
import { site } from "@/lib/site";

export function HeroStaticVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-lg border border-white/10 bg-elevated/40 p-8 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-engine-grid bg-[length:42px_42px] opacity-[0.14]" />
      <div className="absolute -left-20 top-14 h-52 w-52 rounded-full bg-accent/12 blur-3xl" />
      <div className="absolute bottom-8 right-8 h-px w-2/3 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute left-8 top-8 h-px w-1/2 bg-gradient-to-r from-accent/40 to-transparent" />
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-[72%] w-[72%] rounded-full border border-white/10" />
        <div className="absolute h-[52%] w-[52%] rounded-full border border-accent/20 shadow-glow" />
        <Image
          src={site.logo.mark}
          alt="Gamma Pegassi Pegasus wing mark"
          width={320}
          height={320}
          priority
          className="relative z-10 h-[56%] w-[56%] object-contain drop-shadow-[0_0_30px_rgba(189,238,255,0.20)]"
        />
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
        {["Speed", "Clarity", "Systems"].map((item) => (
          <div key={item} className="border border-white/10 bg-black/20 px-3 py-2 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-white/56">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
