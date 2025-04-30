import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { setTechWin } from "../game";
import { getTimerColor } from "../components/Info/Timer/getTimerColor";

export const useMoveTimer = (initialTime: number) => {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const win = useAppSelector((state) => state.game.win);
  const techWin = useAppSelector((state) => state.game.techWin);
  const draw = useAppSelector((state) => state.game.draw);

  const dispatch = useAppDispatch();

  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (win || draw || techWin) {
      setTimer(0);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [win, draw, techWin]);

  useEffect(() => {
    setTimer(win || draw || techWin ? 0 : initialTime);
  }, [currentPlayer, win, draw, techWin]);

  useEffect(() => {
    if (timer === 0 && !win && !draw && !techWin) {
      dispatch(setTechWin());
    }
  }, [timer, dispatch]);

  return {
    color: getTimerColor(timer, initialTime, win || draw),
    minutes: `${Math.floor(timer / 60)}`.padStart(2, "0"),
    seconds: `${timer % 60}`.padStart(2, "0"),
  };
};
