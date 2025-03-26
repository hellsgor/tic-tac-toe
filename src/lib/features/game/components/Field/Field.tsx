import { Cell } from "../Cell/Cell";
import { useAppSelector } from "@/lib/hooks";
import { FieldProps } from "@/models";
import clsx from "clsx";

export default function Field({ win }: FieldProps) {
  const cells = useAppSelector((state) => state.game.cells);
  const winIndices = new Set(win.length ? win[0] : []);

  return (
    <div
      className={clsx(
        "grid aspect-square w-100 grid-cols-3 grid-rows-3 gap-0.25 bg-[#434343]",
        win.length ? "pointer-events-none" : null,
      )}
    >
      {cells.map((cell, idx) => (
        <Cell key={idx} value={cell} index={idx} win={winIndices.has(idx)} />
      ))}
    </div>
  );
}
