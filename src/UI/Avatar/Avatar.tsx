import clsx from "clsx";
import { ReactNode } from "react";

export function Avatar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "aspect-square size-9 overflow-hidden rounded-full bg-transparent text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
