import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { reset } from "../../game";
import { useCallback, useMemo } from "react";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";
import clsx from "clsx";
import { InfoPlayer } from "./InfoPlayer";
import { InfoActions } from "./InfoActions";
import { InfoMove } from "./InfoMove";

export default function Info({ className, win, draw }: InfoProps) {
  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const players = useMemo(
    () => [
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
    ],
    [],
  );

  const dispatch = useAppDispatch();
  const handleResetBtnClick = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={clsx("flex flex-col justify-between gap-y-5", className)}>
      <div className="flex items-center justify-center gap-x-12 rounded-lg p-4 shadow-2xl">
        <InfoPlayer {...players[0]} />

        <InfoMove
          win={win}
          draw={draw}
          currentPlayer={currentPlayer}
          move={move}
        />

        <InfoPlayer {...players[1]} />
      </div>

      <InfoActions handleReset={handleResetBtnClick} />
    </div>
  );
}
