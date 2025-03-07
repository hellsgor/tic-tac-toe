import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellPayload, CellValue } from '../../models';

const initialState: { cells: CellValue[] } = {
  cells: Array(9).fill(null),
};

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<CellPayload>) => {
      state.cells[action.payload.index] = action.payload.symbol;
    },

    resetField: (state) => {
      state.cells = initialState.cells;
    },
  },
});

export const { setSymbol, resetField } = fieldSlice.actions;
export default fieldSlice.reducer;
