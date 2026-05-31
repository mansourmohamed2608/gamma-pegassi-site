import { BookingCTA } from "@/components/sections/BookingCTA";
import { Hero } from "@/components/sections/Hero";
import { PositioningStrip } from "@/components/sections/PositioningStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProductLab } from "@/components/sections/ProductLab";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { WhyGammaPegassi } from "@/components/sections/WhyGammaPegassi";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <ServicesBento />
      <ProductLab />
      <ProcessTimeline />
      <WhyGammaPegassi />
      <BookingCTA />
    </>
  );
}
