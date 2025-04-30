"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MemoizedButton } from "@/UI/Button/Button";
import { memo, useCallback, useEffect } from "react";
import { reset } from "../../game";
import clsx from "clsx";
import { useTimer } from "@/hooks/useTimer";
import { useRouter } from "next/navigation";
import { DURATIONS } from "@/constants";

export const InfoActions = memo(function InfoActions() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const winner = useAppSelector((state) => state.game.winner);
  const draw = useAppSelector((state) => state.game.draw);

  const [timer, resetTimer] = useTimer({
    initialTime: DURATIONS.newGameAfterEnd,
    deps: [winner, draw],
    shouldRun: () => !winner && !draw,
  });

  const handleActionButtonClick = useCallback(
    (isNewGame = false) => {
      dispatch(reset());
      resetTimer();
      if (isNewGame) router.push(`/`);
    },
    [dispatch, resetTimer, router],
  );

  useEffect(() => {
    if ((winner || draw) && timer === 0) {
      handleActionButtonClick(true);
    }
  }, [timer, winner, draw, handleActionButtonClick]);

  return (
    <div
      className={clsx(
        "flex items-center gap-x-5 transition-opacity",
        `opacity-${winner || draw ? 1 : 0}`,
        `pointer-events-${winner || draw ? "auto" : "none"}`,
      )}
    >
      <MemoizedButton
        onClick={() => {
          handleActionButtonClick();
        }}
        className="w-full"
      >
        Play again
      </MemoizedButton>
      <MemoizedButton
        className="w-full"
        onClick={() => handleActionButtonClick(true)}
      >
        New game ({timer})
      </MemoizedButton>
    </div>
  );
});
