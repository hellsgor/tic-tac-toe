import { memo } from "react";
import { Avatar } from "../../UI/Avatar";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { PlayerProps } from "@/models";
import clsx from "clsx";

export function Player({ imgSrc, userName, rate, className }: PlayerProps) {
  return (
    <div className={clsx("flex items-center gap-x-3", className)}>
      <Avatar className="shrink-0 grow-0 basis-9">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt="user image"
            width={36}
            height={36}
            unoptimized={true}
          />
        ) : (
          <UserCircleIcon className="size-9 shrink-0 grow-0 basis-9 stroke-1" />
        )}
      </Avatar>

      <div className="flex flex-col overflow-x-hidden">
        <span className="truncate text-sm">{userName}</span>
        <span className="text-xs text-gray-500">Rate: {rate}</span>
      </div>
    </div>
  );
}

export const MemoizedPlayer = memo(Player);
