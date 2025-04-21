import { CellProps } from "@/models";
import { CellIcon } from "./CellIcon";
import { getClasses } from "./getClasses";
import { useAppSelector } from "@/lib/hooks";
import { selectCell } from "../../selectors";
import { useDoMove } from "../../hooks";

export const Cell = ({ index, isWin }: CellProps) => {
  const value = useAppSelector(selectCell(index));

  const doMove = useDoMove();

  return (
    <button
      className={getClasses(value, isWin)}
      onClick={() => doMove(index)}
      disabled={!!value}
    >
      <CellIcon value={value} size={"70%"} />
    </button>
  );
};
