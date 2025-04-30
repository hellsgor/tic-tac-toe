import InfoRow from "./InfoRow";
import { Status } from "./Status/Status";
import { useAppSelector } from "@/lib/hooks";
import { Timer } from "./Timer/Timer";
import { DURATIONS } from "@/constants";

export const InfoMove = () => {
  const move = useAppSelector((state) => state.game.move);

  return (
    <div className="flex w-40 flex-col items-center justify-center">
      <InfoRow>
        <span>Move #{move}</span>
      </InfoRow>
      <InfoRow>
        <Status />
      </InfoRow>
      <InfoRow>
        <Timer duration={DURATIONS.move} />
      </InfoRow>
    </div>
  );
};
