import { useAppSelector } from "@/lib/hooks";
import { CellValue, PlayerSymbol } from "@/models";
import OIcon from "@/UI/icons/OIcon";
import XIcon from "@/UI/icons/XIcon";
import clsx from "clsx";
import { FC } from "react";

export interface CellIconProps {
  size: string;
  value: CellValue;
}

export const CellIcon: FC<CellIconProps> = ({ size, value }) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

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
};
