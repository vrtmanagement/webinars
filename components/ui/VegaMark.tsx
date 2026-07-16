import { cn } from "@/utils/cn";

interface VegaMarkProps {
  className?: string;
}

/** Renders VEGA with a superscript © mark. */
export function VegaMark({ className }: VegaMarkProps) {
  return (
    <span className={cn("whitespace-nowrap", className)}>
      VEGA<sup>©</sup>
    </span>
  );
}
