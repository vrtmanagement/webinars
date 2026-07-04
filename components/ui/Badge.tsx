import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "live" | "success" | "warning" | "muted";
  className?: string;
}

const variants = {
  default: "bg-indigo-100 text-indigo-700",
  live: "bg-red-100 text-red-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  muted: "bg-neutral-100 text-neutral-600",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {variant === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
      )}
      {children}
    </span>
  );
}
