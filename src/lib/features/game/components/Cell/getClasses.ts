import { CellProps } from "@/models";
import clsx from "clsx";

export const getClasses = ({ value, win }: Omit<CellProps, "index">) => {
  return clsx(
    "border-none flex justify-center items-center transition-[background-color]",
    !value ? "cursor-pointer" : "cursor-default",
    win
      ? value === "x"
        ? "bg-(--color-x-win-bg)"
        : "bg-(--color-o-win-bg)"
      : "bg-[#242424]",
  );
};
