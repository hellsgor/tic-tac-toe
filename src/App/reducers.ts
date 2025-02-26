import { combineReducers } from '@reduxjs/toolkit';
import fieldReducer from '../features/field/fieldSlice';
import infoReducer from '../features/info/infoSlice';

const rootReducer = combineReducers({
  field: fieldReducer,
  info: infoReducer,
});

export default rootReducer;
