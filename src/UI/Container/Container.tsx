import { getString } from "@/helpers/getString";
import { ReactNode } from "react";

export function Container({
  children,
  maxWidth,
}: {
  children: ReactNode;
  maxWidth?: number;
}) {
  const classes = getString(
    maxWidth ? `max-w-[${maxWidth}px]` : null,
    "w-full px-8",
  );
  return <div className={classes}>{children}</div>;
}
