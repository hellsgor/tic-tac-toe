import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CellProps } from "@/models";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import clsx from "clsx";
import { getCellIcon } from "./getCellIcon";

export const Cell = ({ value, index, win }: CellProps) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const classes = clsx(
    "border-none flex justify-center items-center transition-[background-color]",
    !value ? "cursor-pointer" : "cursor-default",
    win
      ? value === "x"
        ? "bg-(--color-x-win-bg)"
        : "bg-(--color-o-win-bg)"
      : "bg-[#242424]",
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
      {getCellIcon({ value, size: "70%", currentPlayer })}
    </button>
  );
};
