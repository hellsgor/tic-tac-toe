import { useMoveTimer } from "../../../hooks/useMoveTimer";

export function Timer({ duration }: { duration: number }) {
  const timer = useMoveTimer(duration);

  return (
    <span className="transition-colors" style={{ color: timer.color }}>
      {`${timer.minutes}:${timer.seconds}`}
    </span>
  );
}
