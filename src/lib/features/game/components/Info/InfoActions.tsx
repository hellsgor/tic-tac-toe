import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MemoizedButton } from "@/UI/Button/Button";
import { memo } from "react";
import { reset } from "../../game";
import clsx from "clsx";

export const InfoActions = memo(function InfoActions() {
  const dispatch = useAppDispatch();
  const winner = useAppSelector((state) => state.game.winner);
  const draw = useAppSelector((state) => state.game.draw);

  return (
    <div
      className={clsx(
        "flex items-center gap-x-5 transition-opacity",
        `opacity-${winner || draw ? 1 : 0}`,
      )}
    >
      <MemoizedButton onClick={() => dispatch(reset())} className="w-full">
        Offer a draw
      </MemoizedButton>
      <MemoizedButton className="w-full">Surrender</MemoizedButton>
    </div>
  );
});
