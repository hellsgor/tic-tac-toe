import { memo } from "react";
import { Avatar } from "../../UI/Avatar";
import Image from "next/image";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline";

interface PlayerProps {
  imgSrc?: string;
  userName: string;
  rate: number;
}

export function Player({ imgSrc, userName, rate }: PlayerProps) {
  return (
    <button className="flex cursor-pointer items-center gap-x-3 text-left transition-colors hover:text-(--color-hover)">
      <Avatar>
        {imgSrc ? (
          <Image src={imgSrc} alt="user image" width={32} height={32} />
        ) : (
          <UserCircleIcon className="size-8 stroke-1" />
        )}
      </Avatar>

      <div className="flex flex-col">
        <span className="text-xs">{userName}</span>
        <span className="text-xs text-gray-500">Rate: {rate}</span>
      </div>

      <ChevronDownIcon className="size-4" />
    </button>
  );
}

export const MemoizedPlayer = memo(Player);
