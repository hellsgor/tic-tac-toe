import { useAppDispatch } from "@/lib/hooks";
import { useCallback, useMemo } from "react";
import { incrementMove, setCurrentPlayer, setTechWin } from "../game";

export function useTechWin() {
  const dispatch = useAppDispatch();

  const setTechnicalWin = useCallback(() => {
    dispatch(setTechWin());
    dispatch(setCurrentPlayer());
    dispatch(incrementMove());
  }, [dispatch]);

  return useMemo(
    () => ({
      setTechnicalWin,
    }),
    [setTechnicalWin],
  );
}
