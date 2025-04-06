import { CellPayload, GameState, PlayerSymbol } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GameState = {
  cells: Array(9).fill(null),
  currentPlayer: PlayerSymbol.X,
  move: 1,
  draw: false,
  win: false,
  winCombination: [],
  techWin: false,
  winner: null,
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
  reset,
} = gameSlice.actions;
export default gameSlice.reducer;
