import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MemoizedButton } from "@/UI/Button/Button";
import { memo, useEffect, useState } from "react";
import { reset } from "../../game";
import clsx from "clsx";

export const InfoActions = memo(function InfoActions() {
  const dispatch = useAppDispatch();
  const winner = useAppSelector((state) => state.game.winner);
  const draw = useAppSelector((state) => state.game.draw);

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (!winner && !draw) {
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [winner, draw]);

  return (
    <div
      className={clsx(
        "flex items-center gap-x-5 transition-opacity",
        `opacity-${winner || draw ? 1 : 0}`,
      )}
    >
      <MemoizedButton onClick={() => dispatch(reset())} className="w-full">
        Play again
      </MemoizedButton>
      <MemoizedButton className="w-full">New game ({timer})</MemoizedButton>
    </div>
  );
});
