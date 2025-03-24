import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { MemoizedButton } from "@/UI/Button/Button";
import { reset } from "../../game";
import { getStatus } from "./getStatus";
import InfoRow from "./InfoRow";
import { useCallback } from "react";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";
import clsx from "clsx";
import { MemoizedInfoPlayer } from "./InfoPlayer";

export default function Info({ className, win, draw }: InfoProps) {
  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const players = [
    {
      userName: "Henry",
      rate: 1234,
      imgSrc: "/images/userExample1.webp",
      icon: <XIcon />,
    },
    {
      userName: "Sophie",
      rate: 1234,
      imgSrc: "/images/userExample2.webp",
      icon: <OIcon />,
    },
  ];

  const dispatch = useAppDispatch();
  const handleResetBtnClick = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={clsx("flex flex-col justify-between gap-y-5", className)}>
      <div className="flex items-center justify-center gap-x-12 rounded-lg p-4 shadow-2xl">
        <MemoizedInfoPlayer {...players[0]} />

        <div className="flex w-40 flex-col items-center justify-center">
          <InfoRow>
            <span>Move #{win.length || draw ? move - 1 : move}</span>
          </InfoRow>
          <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
        </div>

        <MemoizedInfoPlayer {...players[1]} />
      </div>

      <div className="flex items-center gap-x-5">
        <MemoizedButton onClick={handleResetBtnClick} className="w-full">
          Offer a draw
        </MemoizedButton>
        <MemoizedButton className="w-full">Surrender</MemoizedButton>
      </div>
    </div>
  );
}
