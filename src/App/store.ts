import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from '../Components/Field/fieldSlice';

export const store = configureStore({
  reducer: {
    field: fieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
