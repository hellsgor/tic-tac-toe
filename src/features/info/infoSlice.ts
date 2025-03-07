import { createSlice } from '@reduxjs/toolkit';
import { InfoData } from '../../models';

const initialState: InfoData = {
  currentPlayer: 'x',
  move: 1,
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setCurrentPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 'o' ? 'x' : 'o';
    },

    incrementMove: (state) => {
      state.move += 1;
    },

    resetInfo: (state) => {
      state.move = initialState.move;
      state.currentPlayer = state.currentPlayer === 'o' ? 'x' : 'o';
    },
  },
});

export const { setCurrentPlayer, incrementMove, resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
