import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { incrementMove, changeCurrentPlayer, setSymbol } from "../game";
import { useCallback, useMemo } from "react";

export function useDoMove() {
  const dispatch = useAppDispatch();
  const { currentPlayer } = useAppSelector((state) => state.game);

  const doMove = useCallback(
    (index: number) => {
      dispatch(setSymbol({ index, symbol: currentPlayer }));
      dispatch(changeCurrentPlayer());
      dispatch(incrementMove());
    },
    [currentPlayer, dispatch],
  );

  return useMemo(
    () => ({
      doMove,
      currentPlayer,
    }),
    [doMove, currentPlayer],
  );
}
