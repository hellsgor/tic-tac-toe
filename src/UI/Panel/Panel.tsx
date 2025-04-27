import clsx from "clsx";
import { FC, memo, ReactNode } from "react";

export interface PanelProps {
  children: ReactNode;
  justify?: "center" | "between";
}

export const Panel: FC<PanelProps> = memo(function Panel({
  children,
  justify,
}) {
  return (
    <div
      className={clsx(
        "bg-asphalt flex items-center gap-x-12 rounded-lg p-4 shadow-2xl",
        justify ? `justify${justify}` : null,
      )}
    >
      {children}
    </div>
  );
});
