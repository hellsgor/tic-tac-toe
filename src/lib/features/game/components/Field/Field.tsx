import { getString } from "@/helpers/getString";
import { MemoizedCell } from "../Cell/Cell";
import { useAppSelector } from "@/lib/hooks";

export default function Field() {
  const cells = useAppSelector((state) => state.game.cells);
  const win = useAppSelector((state) => state.game.win);

  return (
    <div
      className={getString(
        "grid aspect-square w-90 grid-cols-3 grid-rows-3 gap-0.25 bg-[#434343]",
        win.length ? "pointer-events-none" : null,
      )}
    >
      {cells.map((cell, idx) => (
        <MemoizedCell
          key={idx}
          value={cell}
          index={idx}
          win={!!win.length && win[0].includes(idx)}
        />
      ))}
    </div>
  );
}
