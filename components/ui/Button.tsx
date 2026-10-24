import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        variant === "primary" &&
          "border border-white/75 bg-ice text-ink shadow-glow hover:-translate-y-0.5 hover:bg-white",
        variant === "secondary" &&
          "border border-white/18 bg-white/[0.035] text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.075]",
        variant === "ghost" && "text-muted hover:text-white",
        className,
      )}
    >
      <span>{children}</span>
      {variant !== "ghost" ? (
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
