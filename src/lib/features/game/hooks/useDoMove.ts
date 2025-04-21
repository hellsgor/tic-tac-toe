import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeCurrentPlayer, incrementMove, setSymbol } from "../game";
import { useCallback } from "react";
import { checkGame } from "../thunks";

export function useDoMove() {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const doMove = useCallback(
    (index: number) => {
      dispatch((dispatch, getState) => {
        dispatch(setSymbol({ index, symbol: currentPlayer }));

        dispatch(checkGame());

        const win = getState().game.win;
        const draw = getState().game.draw;

        if (!win && !draw) {
          dispatch(changeCurrentPlayer());
          dispatch(incrementMove());
        }
      });
    },
    [dispatch, currentPlayer],
  );

  return doMove;
}
