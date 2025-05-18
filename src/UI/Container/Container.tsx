import clsx from "clsx";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div className={clsx("flex w-full flex-col px-8", className)}>
      {children}
    </div>
  );
}
