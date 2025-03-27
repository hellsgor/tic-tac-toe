import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { reset } from "../../game";
import { useCallback } from "react";
import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";
import clsx from "clsx";
import { InfoPlayer } from "./InfoPlayer";
import { InfoActions } from "./InfoActions";
import { InfoMove } from "./InfoMove";
import { Panel } from "@/UI/Panel";

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

export default function Info({ className, win, draw }: InfoProps) {
  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const classes = clsx("flex flex-col justify-between gap-y-5", className);

  const dispatch = useAppDispatch();
  const handleResetBtnClick = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={classes}>
      <Panel justify={"center"}>
        <InfoPlayer {...players[0]} />
        <InfoMove
          win={win}
          draw={draw}
          currentPlayer={currentPlayer}
          move={move}
        />
        <InfoPlayer {...players[1]} />
      </Panel>
      <InfoActions handleReset={handleResetBtnClick} />
    </div>
  );
}
