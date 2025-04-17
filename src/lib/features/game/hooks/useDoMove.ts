import { useAppDispatch } from "@/lib/hooks";
import { changeCurrentPlayer, incrementMove, setSymbol } from "../game";
import { useCallback } from "react";
import { CurrentPlayer } from "@/models";
import { checkGame } from "../";

export function useDoMove() {
  const dispatch = useAppDispatch();

  const doMove = useCallback(
    (index: number, symbol: CurrentPlayer) => {
      dispatch((dispatch, getState) => {
        dispatch(setSymbol({ index, symbol }));

        dispatch(checkGame());

        const win = getState().game.win;
        const draw = getState().game.draw;

        if (!win && !draw) {
          dispatch(changeCurrentPlayer());
          dispatch(incrementMove());
        }
      });
    },
    [dispatch],
  );

  return doMove;
}
