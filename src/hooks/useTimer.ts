import { useState } from "react";
import { useNow } from "./useNow";

interface UseTimerParams {
  updateInterval?: number;
  initialTime: number;
  isResetAfterEnd?: boolean;
  resetDelay?: number;
}

interface UseTimerResult {
  toggleTimer: (action?: ToggleTimerActionsType) => void;
  enabled: boolean;
  timer: number;
  countDown: number;
}

export enum ToggleTimerActions {
  START = "start",
  END = "end",
}

type ToggleTimerActionsType = ToggleTimerActions | undefined;

export function useTimer({
  updateInterval = 1000,
  initialTime,
  isResetAfterEnd = false,
  resetDelay = 0,
}: UseTimerParams): UseTimerResult {
  const [startAt, setStartAt] = useState<number | undefined>();
  const [isFinished, setIsFinished] = useState(false);

  const toggleTimer = (action?: ToggleTimerActionsType) => {
    if (action === ToggleTimerActions.END) {
      setStartAt(undefined);
      setIsFinished(true);
      return;
    }

    if (action === ToggleTimerActions.START) {
      setStartAt(Date.now());
      setIsFinished(false);
      return;
    }

    if (startAt) {
      if (resetDelay) {
        setTimeout(() => {
          setStartAt(undefined);
        }, resetDelay);
      } else {
        setStartAt(undefined);
      }
    } else {
      setStartAt(Date.now());
    }
  };

  const now = useNow(updateInterval, !!startAt && !isFinished, (now) => {
    if (startAt && isResetAfterEnd && initialTime - (now - startAt) < 0) {
      setStartAt(undefined);
    }
  });

  const fromStart = startAt ? now - startAt : 0;
  const countDown = isFinished ? 0 : Math.max(initialTime - fromStart, 0);

  return {
    toggleTimer: toggleTimer,
    enabled: !!startAt && !isFinished,
    timer: Math.round(fromStart / updateInterval),
    countDown: Math.round(countDown / updateInterval),
  };
}
