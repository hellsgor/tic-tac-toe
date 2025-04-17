import { RootState } from "@/lib/store";
import { CellValue } from "@/models/cell";
import { createSelector } from "@reduxjs/toolkit";

export const selectCell = (index: number) =>
  createSelector(
    [(state: RootState) => state.game.cells],
    (cells: CellValue[]) => cells[index],
  );
