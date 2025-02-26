import { combineReducers } from '@reduxjs/toolkit';
import fieldReducer from '../features/field/fieldSlice';

const rootReducer = combineReducers({
  field: fieldReducer,
});

export default rootReducer;
