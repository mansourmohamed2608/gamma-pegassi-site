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
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        variant === "primary" &&
          "border border-accent/50 bg-accent text-ink shadow-glow hover:bg-ice",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.04] text-white hover:border-accent/50 hover:bg-white/[0.08]",
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
