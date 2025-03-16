import { CellPayload, CellValue, InfoData } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState extends InfoData {
  cells: CellValue[];
}

const initialState: GameState = {
  cells: Array(9).fill(null),
  currentPlayer: "x",
  move: 1,
  draw: false,
  win: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<CellPayload>) => {
      state.cells[action.payload.index] = action.payload.symbol;
    },

    setCurrentPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "o" ? "x" : "o";
    },

    setWin: (state) => {
      state.win = true;
    },

    setDraw: (state) => {
      state.draw = true;
    },

    incrementMove: (state) => {
      state.move += 1;
    },

    reset: (state) => {
      state.cells = initialState.cells;
      state.currentPlayer = initialState.currentPlayer;
      state.move = initialState.move;
      state.draw = initialState.draw;
      state.win = initialState.win;
    },
  },
});

export const {
  setSymbol,
  setCurrentPlayer,
  setWin,
  setDraw,
  incrementMove,
  reset,
} = gameSlice.actions;
export default gameSlice.reducer;
