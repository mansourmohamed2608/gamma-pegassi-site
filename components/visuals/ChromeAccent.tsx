import { cn } from "@/components/ui/utils";

type ChromeAccentProps = {
  className?: string;
  variant?: "arc" | "sheet" | "line";
};

export function ChromeAccent({ className, variant = "arc" }: ChromeAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute overflow-hidden opacity-70 blur-[0.2px]",
        variant === "arc" &&
          "h-56 w-56 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.40),rgba(189,238,255,0.18)_18%,rgba(111,119,124,0.10)_38%,transparent_68%)] shadow-[inset_0_0_42px_rgba(255,255,255,0.08)]",
        variant === "sheet" &&
          "h-44 w-72 rounded-[42%_58%_44%_56%] bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(189,238,255,0.11)_32%,rgba(111,119,124,0.12)_58%,transparent)]",
        variant === "line" &&
          "h-px w-72 bg-gradient-to-r from-transparent via-white/30 to-accent/20",
        className,
      )}
    />
  );
}
