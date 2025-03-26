import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CellProps } from "@/models";
import { incrementMove, setCurrentPlayer, setSymbol } from "../../game";
import { getCellIcon } from "./getCellIcon";
import { getClasses } from "./getClasses";

export const Cell = ({ value, index, win }: CellProps) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

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
      className={getClasses({ value, win })}
      onClick={handleCellClick}
      disabled={!!value}
    >
      {getCellIcon({ value, size: "70%", currentPlayer })}
    </button>
  );
};
