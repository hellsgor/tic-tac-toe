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
  const timerColor = getTimerColor(timer, !!win.length || draw);

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

const colors = {
  red: [154, 255],
  green: [205, 0],
  blue: [50, 0],
};

function getTimerColor(timer: number, isWinOrDraw: boolean) {
  if (isWinOrDraw)
    return `rgb(${colors.red[0]}, ${colors.green[0]}, ${colors.blue[0]})`;

  const ratio = timer >= 30 ? 1 : timer <= 10 ? 0 : (30 - timer) / 30;

  const getColorValue = (color: keyof typeof colors, isSubtraction = true) => {
    return timer >= 30
      ? colors[color][0]
      : timer <= 10
        ? colors[color][1]
        : Math.round(
            colors[color][0] * (isSubtraction ? 1 - ratio : 1 + ratio),
          );
  };

  const red = getColorValue("red", false);
  const green = getColorValue("green");
  const blue = getColorValue("blue");

  return `rgb(${red}, ${green}, ${blue})`;
}
