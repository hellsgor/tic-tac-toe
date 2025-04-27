import { useTimer } from "../../../hooks";

export function Timer({ duration }: { duration: number }) {
  const timer = useTimer(duration);

  return (
    <span className="transition-colors" style={{ color: timer.color }}>
      {`${timer.minutes}:${timer.seconds}`}
    </span>
  );
}
