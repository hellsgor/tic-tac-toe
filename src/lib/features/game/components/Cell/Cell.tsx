import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CellProps, CellValue } from "@/models";
import { memo } from "react";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import { getString } from "@/helpers/getString";

const Cell = ({ value, index, win }: CellProps) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const getClasses = (value: CellValue) =>
    getString(
      [
        "border-none",
        `${win ? (currentPlayer === "x" ? "bg-(--color-o-win-bg)" : "bg-(--color-x-win-bg)") : "bg-[#242424]"}`,
      ],
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
