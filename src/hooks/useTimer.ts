import { useEffect, useState } from "react";

interface useTimerProps {
  initialTime: number;
  deps: unknown[];
  shouldRun: () => boolean;
  intervalMs?: number;
}

export function useTimer({
  initialTime,
  deps,
  shouldRun,
  intervalMs = 1000,
}: useTimerProps): number {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (shouldRun()) {
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(0, prev - 1));
    }, intervalMs);

    return () => clearInterval(interval);
  }, deps);

  return timer;
}
