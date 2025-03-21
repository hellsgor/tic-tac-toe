import { memo } from "react";
import { Avatar } from "./Avatar";
import { PlayerIcon } from "./PlayerIcon";
import Image from "next/image";

interface PlayerProps {
  imgSrc?: string;
  userName: string;
  rate: number;
}

export function Player({ imgSrc, userName, rate }: PlayerProps) {
  return (
    <button className="flex cursor-pointer items-center gap-x-2 text-left transition-colors hover:text-(--color-hover)">
      <Avatar>
        {imgSrc ? (
          <Image src={imgSrc} alt="user image" width={500} height={500} />
        ) : (
          <PlayerIcon />
        )}
      </Avatar>

      <div className="flex flex-col">
        <span className="text-xs">{userName}</span>
        <span className="text-xs text-gray-500">Rate: {rate}</span>
      </div>
    </button>
  );
}

export const MemoizedPlayer = memo(Player);
