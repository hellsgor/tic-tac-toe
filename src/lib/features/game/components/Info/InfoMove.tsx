import { InfoMoveProps } from "@/models";
import { FC } from "react";
import InfoRow from "./InfoRow";
import { getStatus } from "./getStatus";
import { getTimerColor } from "./geTimerColor";

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
