export function getString(
  ...classArgs: (string | string[] | null | undefined)[]
): string {
  const toArray = (item: string | string[] | null | undefined): string[] => {
    if (!item) return [];
    return Array.isArray(item) ? item : item.split(" ");
  };

  return classArgs.flatMap(toArray).join(" ");
}
