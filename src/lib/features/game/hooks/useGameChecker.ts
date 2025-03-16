import { WIN_COMBINATIONS } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CellValue } from "@/models";
import { setDraw, setWin } from "../game";
import { useEffect } from "react";

export const useGameChecker = () => {
  const cells = useAppSelector((state) => state.game.cells);
  const move = useAppSelector((state) => state.game.move);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (move > 4) {
      const win = WIN_COMBINATIONS.filter((combination) => {
        const reference: CellValue = cells[combination[0]];

        if (!reference) return;

        return combination.every(
          (combinationCell) =>
            !!cells[combinationCell] && cells[combinationCell] === reference,
        );
      });

      if (win.length) {
        dispatch(setWin(win));
      } else if (move > 9 && !win.length) {
        dispatch(setDraw());
      }
    }
  }, [cells, move, dispatch]);
};
