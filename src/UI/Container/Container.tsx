import clsx from "clsx";
import { ReactNode } from "react";

export function Container({
  children,
  centered = false,
  gap,
  className,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  gap?: number;
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col px-8",
        centered && "items-center justify-center",
        gap && `gap-${gap}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
