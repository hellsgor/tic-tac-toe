import { CellProps } from "@/models";
import { getCellIcon } from "./getCellIcon";
import { getClasses } from "./getClasses";
import { useAppSelector } from "@/lib/hooks";
import { selectCell } from "../../selectors";

export const Cell = ({ index, isWin, doMove }: CellProps) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const value = useAppSelector(selectCell(index));

  return (
    <button
      className={getClasses(value, isWin)}
      onClick={doMove}
      disabled={!!value}
    >
      {getCellIcon({ value, size: "70%", currentPlayer })}
    </button>
  );
};
