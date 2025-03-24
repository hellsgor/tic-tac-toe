import { MemoizedPlayer } from "@/components/Player";
import { InfoPlayerProps } from "@/models";
import { memo } from "react";

function InfoPlayer({ userName, rate, imgSrc, icon }: InfoPlayerProps) {
  return (
    <div className="relative flex items-center pl-1">
      <MemoizedPlayer
        userName={userName}
        rate={rate}
        imgSrc={imgSrc}
        className="w-36"
      />
      <div className="bg-dark-bg absolute -bottom-0 -left-0 flex size-4 items-center justify-center rounded-full p-0.5">
        {icon}
      </div>
    </div>
  );
}

export const MemoizedInfoPlayer = memo(InfoPlayer);
