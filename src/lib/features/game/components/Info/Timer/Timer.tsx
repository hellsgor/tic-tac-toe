import { useTimer } from "../../../hooks";

export function Timer() {
  const timer = useTimer(10);

  return (
    <span className="transition-colors" style={{ color: timer.color }}>
      {`${timer.minutes}:${timer.seconds}`}
    </span>
  );
}
