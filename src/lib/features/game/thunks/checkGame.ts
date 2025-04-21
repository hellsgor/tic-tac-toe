import { WIN_COMBINATIONS } from "@/constants";
import { AppDispatch, RootState } from "@/lib/store";
import { CellValue } from "@/models";
import { setDraw, setWinCombination } from "../game";

export const checkGame =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const cells = getState().game.cells;
    const move = getState().game.move;
    const techWin = getState().game.techWin;
    const cellsCount = getState().game.cellsCount;
    const currentPlayer = getState().game.currentPlayer;

    if (techWin || move <= 4) return;

    const winCombination =
      WIN_COMBINATIONS.find((combination) => {
        const reference: CellValue = cells[combination[0]];
        if (!reference) return false;
        return combination.every(
          (combinationCell) => cells[combinationCell] === reference,
        );
      }) || [];

    if (winCombination.length) {
      console.log("winner:", currentPlayer);
      dispatch(setWinCombination({ winCombination, winner: currentPlayer }));
    }

    if (move >= cellsCount && !winCombination.length) {
      dispatch(setDraw());
    }
  };
