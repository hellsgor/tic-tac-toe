import { WIN_COMBINATIONS } from "@/constants";
import { useAppSelector } from "@/lib/hooks";
import { CellValue, GameCheck } from "@/models";

export const useGameChecker = (): GameCheck => {
  const cells = useAppSelector((state) => state.game.cells);
  const move = useAppSelector((state) => state.game.move);
  const techWin = useAppSelector((state) => state.game.techWin);

  const win =
    techWin === true
      ? [[]]
      : move > 4
        ? WIN_COMBINATIONS.filter((combination) => {
            const reference: CellValue = cells[combination[0]];

            if (!reference) return;

            return combination.every(
              (combinationCell) =>
                !!cells[combinationCell] &&
                cells[combinationCell] === reference,
            );
          })
        : [];

  return {
    win,
    draw: move > 9 && !win.length,
  };
};
