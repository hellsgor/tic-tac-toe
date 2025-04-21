import { CellValue, PlayerSymbol, Win } from "@/models";
import clsx from "clsx";

export const getClasses = (value: CellValue, isWin: Win) => {
  return clsx(
    "border-none flex justify-center items-center transition-[background-color]",
    !value ? "cursor-pointer" : "cursor-default",
    isWin
      ? value === PlayerSymbol.X
        ? "bg-(--color-x-win-bg)"
        : "bg-(--color-o-win-bg)"
      : "bg-[#242424]",
  );
};
