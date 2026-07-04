import { AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "Failed to load webinars. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
        <AlertCircle className="h-8 w-8 text-red-500" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">
        Something went wrong
      </h3>
      <p className="mt-2 max-w-md text-muted">{message}</p>
      {onRetry && (
        <Button className="mt-6" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
