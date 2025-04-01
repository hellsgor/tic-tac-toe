import { CellValueSymbols, Draw, Win } from "@/models";
import { useEffect, useState } from "react";

type useTimerDeps = [CellValueSymbols, Win, Draw];

export const useTimer = (initialTime: number, deps: useTimerDeps) => {
  const [currentPlayer, win, draw] = deps;
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimer(!!win.length || draw ? 0 : 60);
  }, [currentPlayer, win, draw]);

  return timer;
};
