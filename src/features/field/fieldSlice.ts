import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellPayload, CellValue } from '../../models';

const initialState: { value: CellValue[] } = {
  value: Array(9).fill(null),
};

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<CellPayload>) => {
      state.value[action.payload.index] = action.payload.symbol;
    },
  },
});

export const { setSymbol } = fieldSlice.actions;
export default fieldSlice.reducer;
