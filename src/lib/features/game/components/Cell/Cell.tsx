import { useAppDispatch } from "@/lib/hooks";
import { CellProps } from "@/models";
import { memo } from "react";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import clsx from "clsx";

const Cell = ({ value, index, win }: CellProps) => {
  const bgColorClass = win
    ? value === "x"
      ? "bg-(--color-x-win-bg)"
      : "bg-(--color-o-win-bg)"
    : "bg-[#242424]";

  const classes = clsx(
    "border-none",
    !value ? "cursor-pointer" : "cursor-default",
    bgColorClass,
    value
      ? [
          `${value ? (value === "o" ? "bg-[url(/icons/o.svg)]" : "bg-[url(/icons/x.svg)]") : ""}`,
          "bg-[auto_70%]",
          "bg-center",
          "bg-no-repeat",
        ]
      : [],
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
    <button
      className={classes}
      onClick={handleCellClick}
      disabled={!!value}
    ></button>
  );
};

export const MemoizedCell = memo(Cell);
