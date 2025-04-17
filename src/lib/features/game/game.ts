import { CellPayload, GameState, PlayerSymbol, WinCombination } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cellsCount = 9;

const initialState: GameState = {
  cells: Array(cellsCount).fill(null),
  currentPlayer: PlayerSymbol.X,
  move: 1,
  draw: false,
  win: false,
  winCombination: [],
  techWin: false,
  winner: null,
  cellsCount,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<CellPayload>) => {
      state.cells[action.payload.index] = action.payload.symbol;
    },

    changeCurrentPlayer: (state) => {
      state.currentPlayer =
        state.currentPlayer === PlayerSymbol.O
          ? PlayerSymbol.X
          : PlayerSymbol.O;
    },

    incrementMove: (state) => {
      state.move += 1;
    },

    setTechWin: (state) => {
      state.techWin = true;
    },

    setWinCombination: (state, action: PayloadAction<WinCombination>) => {
      state.winCombination = action.payload;
      state.win = true;
    },

    setDraw: (state) => {
      state.draw = true;
    },

    reset: (state) => {
      state.cells = initialState.cells;
      state.currentPlayer = initialState.currentPlayer;
      state.move = initialState.move;
      state.techWin = initialState.techWin;
    },
  },
});

export const {
  setSymbol,
  changeCurrentPlayer,
  incrementMove,
  setTechWin,
  setWinCombination,
  setDraw,
  reset,
} = gameSlice.actions;
export default gameSlice.reducer;
