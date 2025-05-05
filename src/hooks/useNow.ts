import { useLayoutEffect, useRef, useState } from "react";

export function useNow(
  interval: number,
  enabled: boolean,
  cb?: (now: number) => void,
) {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  const [now, setNow] = useState(Date.now());

  useLayoutEffect(() => {
    if (!enabled) return;

    setNow(Date.now());
    cbRef.current?.(Date.now());

    const i = setInterval(() => {
      setNow(Date.now());
      cbRef.current?.(Date.now());
    }, interval);

    return () => {
      clearInterval(i);
    };
  }, [interval, enabled]);

  return now;
}
