"use client";

import type { CSSProperties, MouseEvent } from "react";
import { cn } from "@/components/ui/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ "--mouse-x": "50%", "--mouse-y": "20%" } as CSSProperties}
      className={cn(
        "group relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045]",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition before:duration-300 before:[background:radial-gradient(480px_circle_at_var(--mouse-x,50%)_var(--mouse-y,20%),rgba(213,224,229,0.10),transparent_42%)] hover:before:opacity-100",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
