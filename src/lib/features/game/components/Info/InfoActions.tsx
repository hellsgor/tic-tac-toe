import { useAppDispatch } from "@/lib/hooks";
import { MemoizedButton } from "@/UI/Button/Button";
import { memo } from "react";
import { reset } from "../../game";

export const InfoActions = memo(function InfoActions() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-x-5">
      <MemoizedButton onClick={() => dispatch(reset())} className="w-full">
        Offer a draw
      </MemoizedButton>
      <MemoizedButton className="w-full">Surrender</MemoizedButton>
    </div>
  );
});
