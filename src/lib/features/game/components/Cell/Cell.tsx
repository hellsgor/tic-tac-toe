import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CellProps } from "@/models";
import { memo } from "react";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import clsx from "clsx";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";

const Cell = ({ value, index, win }: CellProps) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const getIcon = () => {
    const iconSize = "70%";

    if (value)
      return value === "x" ? (
        <XIcon size={iconSize} />
      ) : (
        <OIcon size={iconSize} />
      );

    return (
      <div
        className={clsx(
          "flex items-center justify-center opacity-0 grayscale transition-opacity",
          currentPlayer === "x" ? "hover:opacity-100" : "hover:opacity-10",
        )}
      >
        {currentPlayer === "x" ? (
          <XIcon size={iconSize} />
        ) : (
          <OIcon size={iconSize} />
        )}
      </div>
    );
  };

  const bgColorClass = win
    ? value === "x"
      ? "bg-(--color-x-win-bg)"
      : "bg-(--color-o-win-bg)"
    : "bg-[#242424]";

  const classes = clsx(
    "border-none flex justify-center items-center",
    !value ? "cursor-pointer" : "cursor-default",
    bgColorClass,
  );

  const dispatch = useAppDispatch();

  const handleCellClick = () => {
    if (value) return;

    dispatch((dispatch, getState) => {
      dispatch(setSymbol({ index, symbol: getState().game.currentPlayer }));
      dispatch(setCurrentPlayer());
      dispatch(incrementMove());
    });
  };

  return (
    <button className={classes} onClick={handleCellClick} disabled={!!value}>
      {getIcon()}
    </button>
  );
};

export const MemoizedCell = memo(Cell);
