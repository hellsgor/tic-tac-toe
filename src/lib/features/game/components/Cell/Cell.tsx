import { useAppDispatch } from "@/lib/hooks";
import { CellProps, CellValue } from "@/models";
import { memo } from "react";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import { getString } from "@/helpers/getString";

const Cell = ({ value, index, win }: CellProps) => {
  const bgColorClass = win
    ? value === "x"
      ? "bg-(--color-x-win-bg)"
      : "bg-(--color-o-win-bg)"
    : "bg-[#242424]";

  const getClasses = (value: CellValue) =>
    getString(
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
      className={getClasses(value)}
      onClick={handleCellClick}
      disabled={!!value}
    ></button>
  );
};

export const MemoizedCell = memo(Cell);
