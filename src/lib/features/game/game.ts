import { CellPayload, CellValue, InfoData, TechWin } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState extends InfoData {
  cells: CellValue[];
  techWin: TechWin;
}

const initialState: GameState = {
  cells: Array(9).fill(null),
  currentPlayer: "x",
  move: 1,
  techWin: false,
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

    incrementMove: (state) => {
      state.move += 1;
    },

    setTechWin: (state) => {
      state.techWin = true;
    },

    reset: (state) => {
      state.cells = initialState.cells;
      state.currentPlayer = initialState.currentPlayer;
      state.move = initialState.move;
      state.techWin = initialState.techWin;
    },
  },
});

export const { setSymbol, setCurrentPlayer, incrementMove, setTechWin, reset } =
  gameSlice.actions;
export default gameSlice.reducer;
