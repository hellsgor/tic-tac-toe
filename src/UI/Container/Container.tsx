import clsx from "clsx";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("w-full", "px-8", className)}>{children}</div>;
}
