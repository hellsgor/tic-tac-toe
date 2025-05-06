import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { setTechWin } from "../game";
import { getTimerColor } from "../components/Info/Timer/getTimerColor";
import { ToggleTimerActions, useTimer } from "@/hooks/useTimer";

export const useMoveTimer = (initialTime: number) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const win = useAppSelector((state) => state.game.win);
  const techWin = useAppSelector((state) => state.game.techWin);
  const draw = useAppSelector((state) => state.game.draw);

  const dispatch = useAppDispatch();

  const { toggleTimer, countDown, enabled } = useTimer({ initialTime });

  useEffect(() => {
    if (!win && !draw && !techWin) {
      toggleTimer(ToggleTimerActions.START);
    }

    if ((win || draw || techWin) && enabled) {
      toggleTimer(ToggleTimerActions.END);
    }
  }, [currentPlayer, win, draw, techWin]);

  useEffect(() => {
    if (countDown <= 0) {
      toggleTimer(ToggleTimerActions.END);
      if (!win && !draw && !techWin) {
        dispatch(setTechWin());
      }
    }
  }, [dispatch, countDown]);

  return {
    color: getTimerColor(countDown * 1000, initialTime, win || draw),
    minutes: `${Math.floor(countDown / 60)}`.padStart(2, "0"),
    seconds: `${countDown % 60}`.padStart(2, "0"),
  };
};
