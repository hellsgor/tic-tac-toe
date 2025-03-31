import { InfoMoveProps } from "@/models";
import { FC } from "react";
import InfoRow from "./InfoRow";
import { getStatus } from "./getStatus";

export const InfoMove: FC<InfoMoveProps> = ({
  win,
  draw,
  currentPlayer,
  move,
  timer,
}) => {
  const minutes = `${Math.floor(timer / 60)}`.padStart(2, "0");
  const seconds = `${timer % 60}`.padStart(2, "0");
  const timerColor = getTimerColor(timer);

  return (
    <div className="flex w-40 flex-col items-center justify-center">
      <InfoRow>
        <span>Move #{win.length || draw ? move - 1 : move}</span>
      </InfoRow>
      <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
      <InfoRow>
        <span className="transition-colors" style={{ color: timerColor }}>
          {`${minutes}:${seconds}`}
        </span>
      </InfoRow>
    </div>
  );
};

function getTimerColor(timer: number) {
  const ratio = timer >= 30 ? 1 : timer <= 10 ? 0 : (30 - timer) / 30;

  const getColorValue = (start: number, end: number, isSubtraction = true) => {
    return timer >= 30
      ? start
      : timer <= 10
        ? end
        : Math.round(start * (isSubtraction ? 1 - ratio : 1 + ratio));
  };

  const red = getColorValue(154, 255, false);
  const green = getColorValue(205, 0);
  const blue = getColorValue(50, 0);

  return `rgb(${red}, ${green}, ${blue})`;
}
