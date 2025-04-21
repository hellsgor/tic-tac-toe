import Cell from "../Cell";
import { useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { useMemo } from "react";

export default function Field() {
  const win = useAppSelector((state) => state.game.win);
  const techWin = useAppSelector((state) => state.game.techWin);
  const winCombination = useAppSelector((state) => state.game.winCombination);
  const cellsCount = useAppSelector((state) => state.game.cellsCount);

  const pseudoCells = useMemo(() => Array(cellsCount).fill(null), [cellsCount]);

  const classes = clsx(
    "grid aspect-square w-100 grid-cols-3 grid-rows-3 gap-0.25 bg-[#434343]",
    win || techWin ? "pointer-events-none" : null,
  );

  return (
    <div className={classes}>
      {pseudoCells.map((_, idx) => (
        <Cell key={idx} index={idx} isWin={winCombination.includes(idx)} />
      ))}
    </div>
  );
}
