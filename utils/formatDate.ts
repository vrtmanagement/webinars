export function formatWebinarDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatPrice(price: number): string {
  return price === 0 ? "Free" : `$${price.toFixed(0)}`;
}
