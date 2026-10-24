import Image from "next/image";
import { site } from "@/lib/site";

export function HeroStaticVisual() {
  return (
    <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden sm:min-h-[30rem] lg:min-h-[calc(100svh-5rem)]">
      <div className="hairline-grid absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute h-[68%] w-[68%] rounded-full border border-white/10" />
      <div className="absolute h-[48%] w-[48%] rounded-full border border-white/15 shadow-glow" />
      <div className="relative aspect-square w-[58%] max-w-[32rem]">
        <Image
          src={site.logo.mark}
          alt="Gamma Pegassi Pegasus wing mark"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 42vw"
          className="object-contain drop-shadow-[0_0_54px_rgba(213,224,229,0.18)]"
        />
      </div>
    </div>
  );
}
