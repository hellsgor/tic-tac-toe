"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MemoizedButton } from "@/UI/Button/Button";
import { memo, useCallback, useEffect } from "react";
import { reset } from "../../game";
import clsx from "clsx";
import { useTimer } from "@/hooks/useTimer";
import { useRouter } from "next/navigation";

export const InfoActions = memo(function InfoActions() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const winner = useAppSelector((state) => state.game.winner);
  const draw = useAppSelector((state) => state.game.draw);

  const [timer, resetTimer] = useTimer({
    initialTime: 10,
    deps: [winner, draw],
    shouldRun: () => !winner && !draw,
  });

  const handleNewGameClick = useCallback(() => {
    dispatch(reset());
    router.push(`/`);
  }, [dispatch, router]);

  const handlePlayAgainClick = useCallback(() => {
    dispatch(reset());
    resetTimer();
  }, [dispatch, resetTimer]);

  useEffect(() => {
    if ((winner || draw) && timer === 0) {
      handleNewGameClick();
    }
  }, [timer, winner, draw, handleNewGameClick]);

  return (
    <div
      className={clsx(
        "flex items-center gap-x-5 transition-opacity",
        `opacity-${winner || draw ? 1 : 0}`,
        `pointer-events-${winner || draw ? "auto" : "none"}`,
      )}
    >
      <MemoizedButton onClick={handlePlayAgainClick} className="w-full">
        Play again
      </MemoizedButton>
      <MemoizedButton className="w-full" onClick={handleNewGameClick}>
        New game ({timer})
      </MemoizedButton>
    </div>
  );
});
