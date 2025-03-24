import { MemoizedCell } from "../Cell/Cell";
import { useAppSelector } from "@/lib/hooks";
import { FieldProps } from "@/models";
import clsx from "clsx";

export default function Field({ win }: FieldProps) {
  const cells = useAppSelector((state) => state.game.cells);

  return (
    <div
      className={clsx(
        "grid aspect-square w-100 grid-cols-3 grid-rows-3 gap-0.25 bg-[#434343]",
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
