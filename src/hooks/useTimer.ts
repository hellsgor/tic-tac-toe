import { useState } from "react";
import { useNow } from "./useNow";

interface UseTimerParams {
  updateInterval?: number;
  initialTime: number;
  isResetAfterEnd?: boolean;
  resetDelay?: number;
}

interface UseTimerResult {
  toggleTimer: () => void;
  enabled: boolean;
  timer: number;
  countDown: number;
}

export function useTimer({
  updateInterval = 1000,
  initialTime,
  isResetAfterEnd = false,
  resetDelay = 0,
}: UseTimerParams): UseTimerResult {
  const [startAt, setStartAt] = useState<number | undefined>();

  const toggleTimer = () => {
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

  const now = useNow(updateInterval, !!startAt, (now) => {
    if (startAt && isResetAfterEnd && initialTime - (now - startAt) < 0) {
      setStartAt(undefined);
    }
  });

  const fromStart = now - (startAt ?? now);

  const timer = Math.min(fromStart, initialTime);
  const countDown = Math.max(initialTime - fromStart, 0);

  return {
    toggleTimer: toggleTimer,
    enabled: !!startAt,
    timer: Math.round(timer / updateInterval),
    countDown: Math.round(countDown / updateInterval),
  };
}
