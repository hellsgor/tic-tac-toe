import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./features/game/game";

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
