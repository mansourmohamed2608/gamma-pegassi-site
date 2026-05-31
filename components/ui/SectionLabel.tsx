import { cn } from "@/components/ui/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-bold uppercase tracking-[0.28em] text-accent/85",
        className,
      )}
    >
      {children}
    </p>
  );
}
