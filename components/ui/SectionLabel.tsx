import { cn } from "@/components/ui/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent/80 before:h-px before:w-7 before:bg-accent/45",
        className,
      )}
    >
      {children}
    </p>
  );
}
