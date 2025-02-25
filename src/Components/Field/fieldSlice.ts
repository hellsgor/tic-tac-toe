import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellValue } from '../../models';

const initialState: { value: CellValue[] } = {
  value: Array(9).fill(null),
};

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<CellValue[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setSymbol } = fieldSlice.actions;
export default fieldSlice.reducer;
