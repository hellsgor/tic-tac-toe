import { PlayerIcon } from "./PlayerIcon";

export function Player() {
  return (
    <button className="flex cursor-pointer items-center gap-x-2 text-left transition-colors hover:text-(--color-hover)">
      <PlayerIcon />
      <div className="flex flex-col">
        <span className="text-xs">Username</span>
        <span className="text-xs text-gray-500">Rate: 1234</span>
      </div>
    </button>
  );
}
