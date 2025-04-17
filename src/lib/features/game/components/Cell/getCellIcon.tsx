import { CellValue, PlayerSymbol } from "@/models";
import OIcon from "@/UI/icons/OIcon";
import XIcon from "@/UI/icons/XIcon";
import clsx from "clsx";

export interface getCellIconProps {
  size: string;
  value: CellValue;
  currentPlayer: PlayerSymbol;
}

export function getCellIcon({ size, value, currentPlayer }: getCellIconProps) {
  const Icon = value
    ? value === PlayerSymbol.X
      ? XIcon
      : OIcon
    : currentPlayer === PlayerSymbol.X
      ? XIcon
      : OIcon;

  return value ? (
    <Icon size={size} />
  ) : (
    <div
      className={clsx(
        "flex items-center justify-center opacity-0 grayscale transition-opacity",
        currentPlayer === PlayerSymbol.X
          ? "hover:opacity-100"
          : "hover:opacity-10",
      )}
    >
      <Icon size={size} />
    </div>
  );
}
