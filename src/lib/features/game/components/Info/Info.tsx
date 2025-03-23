import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps, PlayerPropsWithIcon } from "@/models";
import { MemoizedButton } from "@/UI/Button/Button";
import { reset } from "../../game";
import { getStatus } from "./getStatus";
import InfoRow from "./InfoRow";
import { useCallback } from "react";
import { MemoizedPlayer } from "@/components/Player/Player";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";
import clsx from "clsx";

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

  const player = ({ userName, rate, imgSrc, icon }: PlayerPropsWithIcon) => (
    <div className="relative flex items-center pl-1">
      <MemoizedPlayer userName={userName} rate={rate} imgSrc={imgSrc} />
      <div className="bg-dark-bg absolute -bottom-0 -left-0 flex size-4 items-center justify-center rounded-full p-0.5">
        {icon}
      </div>
    </div>
  );

  return (
    <div className={clsx("flex flex-col justify-between gap-y-5", className)}>
      <div className="grid auto-cols-fr grid-cols-3 items-center justify-center gap-x-12 rounded-lg p-4 shadow-2xl">
        {player(players[0])}

        <div className="flex flex-col items-center justify-center">
          <InfoRow>
            <span>Move #{win.length || draw ? move - 1 : move}</span>
          </InfoRow>
          <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
        </div>

        {player(players[1])}
      </div>

      <div className="flex items-center gap-x-5">
        <MemoizedButton onClick={handleResetBtnClick} classes="w-full">
          Offer a draw
        </MemoizedButton>
        <MemoizedButton classes="w-full">Surrender</MemoizedButton>
      </div>
    </div>
  );
}
