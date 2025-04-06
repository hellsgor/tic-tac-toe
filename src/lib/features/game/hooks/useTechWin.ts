import { useAppDispatch } from "@/lib/hooks";
import { useCallback, useMemo } from "react";
import { incrementMove, changeCurrentPlayer, setTechWin } from "../game";

export function useTechWin() {
  const dispatch = useAppDispatch();

  const setTechnicalWin = useCallback(() => {
    dispatch(setTechWin());
    dispatch(changeCurrentPlayer());
    dispatch(incrementMove());
  }, [dispatch]);

  return useMemo(
    () => ({
      setTechnicalWin,
    }),
    [setTechnicalWin],
  );
}
