// import { FieldProps } from "@/models";
import { CellValue } from "@/models";
import { MemoizedCell } from "../Cell/Cell";
import { useAppSelector } from "@/lib/hooks";
// { winCombination }: FieldProps
export default function Field() {
  const cells: CellValue[] = useAppSelector((state) => state.game.cells);

  return (
    <div
      className="grid aspect-square w-90 grid-cols-3 grid-rows-3 gap-0.25 bg-[#434343]"
      // style={winCombination.length ? { pointerEvents: "none" } : {}}
    >
      {cells.map((cell, idx) => (
        <MemoizedCell
          key={idx}
          value={cell}
          index={idx}
          // win={!!winCombination.length && winCombination.includes(idx)}
        />
      ))}
    </div>
  );
}
