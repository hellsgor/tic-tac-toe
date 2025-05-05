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

  const { toggleTimer, enabled, countDown } = useTimer({
    initialTime: DURATIONS.newGameAfterEnd,
    updateInterval: 1000,
    resetDelay: 200,
  });

  const handleActionButtonClick = useCallback(
    (isNewGame = false) => {
      dispatch(reset());
      if (enabled) toggleTimer();
      if (isNewGame) router.push(`/`);
    },
    [dispatch, router, enabled],
  );

  useEffect(() => {
    if ((winner || draw) && !enabled) {
      toggleTimer();
    }
  }, [winner, draw]);

  useEffect(() => {
    if ((winner || draw) && countDown <= 0) {
      handleActionButtonClick(true);
    }
  }, [winner, draw, countDown, handleActionButtonClick]);

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
        New game ({String(countDown).padStart(2, "0")})
      </MemoizedButton>
    </div>
  );
});
