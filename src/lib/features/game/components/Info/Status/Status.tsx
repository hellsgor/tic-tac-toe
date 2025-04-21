import { useAppSelector } from "@/lib/hooks";
import { PlayerSymbol } from "@/models";
import OIcon from "@/UI/icons/OIcon";
import XIcon from "@/UI/icons/XIcon";
import { memo } from "react";

export const Status = memo(function Status() {
  const draw = useAppSelector((state) => state.game.draw);
  const win = useAppSelector((state) => state.game.win);
  const winner = useAppSelector((state) => state.game.winner);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  return draw ? (
    <span>Draw!</span>
  ) : (
    <>
      <span>Player</span>
      <span className="inline-block size-5">
        {(winner || currentPlayer) === PlayerSymbol.X ? <XIcon /> : <OIcon />}
      </span>
      <span>{win ? " won!" : " move"}</span>
    </>
  );
});
