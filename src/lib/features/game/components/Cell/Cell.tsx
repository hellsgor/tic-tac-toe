import { CellProps } from "@/models";
import { getCellIcon } from "./getCellIcon";
import { getClasses } from "./getClasses";
import { useDoMove } from "../../hooks";

export const Cell = ({ value, index, win }: CellProps) => {
  const { doMove, currentPlayer } = useDoMove();

  const handleCellClick = () => {
    if (value) return;
    doMove(index);
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
