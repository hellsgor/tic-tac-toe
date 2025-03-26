import { InfoMoveProps } from "@/models";
import { FC } from "react";
import InfoRow from "./InfoRow";
import { getStatus } from "./getStatus";

export const InfoMove: FC<InfoMoveProps> = ({
  win,
  draw,
  currentPlayer,
  move,
}) => (
  <div className="flex w-40 flex-col items-center justify-center">
    <InfoRow>
      <span>Move #{win.length || draw ? move - 1 : move}</span>
    </InfoRow>
    <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
  </div>
);
