import { MemoizedButton } from "@/UI/Button/Button";
import { memo } from "react";

export const InfoActions = memo(function InfoActions({
  handleReset,
}: {
  handleReset: () => void;
}) {
  return (
    <div className="flex items-center gap-x-5">
      <MemoizedButton onClick={handleReset} className="w-full">
        Offer a draw
      </MemoizedButton>
      <MemoizedButton className="w-full">Surrender</MemoizedButton>
    </div>
  );
});
