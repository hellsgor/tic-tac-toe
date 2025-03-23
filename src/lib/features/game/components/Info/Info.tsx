import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps, PlayerPropsWithIcon } from "@/models";
import { getString } from "@/helpers/getString";
import { MemoizedButton } from "@/UI/Button/Button";
import { reset } from "../../game";
import { getStatus } from "./getStatus";
import InfoRow from "./InfoRow";
import { useCallback } from "react";
import { MemoizedPlayer } from "@/components/Player/Player";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";

export default function Info({ classes, win, draw }: InfoProps) {
  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

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
    <div className={getString(classes)}>
      <div className="grid auto-cols-fr grid-cols-3 items-center justify-center gap-x-12 rounded-lg p-4 shadow-2xl">
        {player({
          userName: "Henry",
          rate: 1234,
          imgSrc: "/images/userExample1.webp",
          icon: <XIcon />,
        })}

        <div className="flex flex-col items-center justify-center">
          <InfoRow>
            <span>Move #{win.length || draw ? move - 1 : move}</span>
          </InfoRow>
          <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
        </div>

        {player({
          userName: "Sophie",
          rate: 1234,
          imgSrc: "/images/userExample2.webp",
          icon: <OIcon />,
        })}
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
