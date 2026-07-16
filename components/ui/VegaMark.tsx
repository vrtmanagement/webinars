import { cn } from "@/utils/cn";

interface VegaMarkProps {
  className?: string;
}

/** Renders VEGA with a matching-size © mark (not ™). */
export function VegaMark({ className }: VegaMarkProps) {
  return (
    <span className={cn("whitespace-nowrap", className)}>
      VEGA
      <span className="ml-0.5 inline-block font-[inherit] text-[1em] leading-none align-baseline">
        ©
      </span>
    </span>
  );
}
