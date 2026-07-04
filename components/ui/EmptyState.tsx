import { CalendarX } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No webinars available",
  description = "Check back soon for upcoming sessions from industry experts.",
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
        <CalendarX className="h-8 w-8 text-indigo-400" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-muted">{description}</p>
      {onAction && (
        <Button className="mt-6" onClick={onAction}>
          Refresh
        </Button>
      )}
    </div>
  );
}
