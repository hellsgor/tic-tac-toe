import { InfoProps } from "@/models";
import { GameState } from "../../game";
import { OIcon } from "@/UI/icons/OIcon";
import { XIcon } from "@/UI/icons/XIcon";

type GetStatusProps = Omit<InfoProps, "classes"> &
  Pick<GameState, "currentPlayer">;

export const getStatus = ({ win, draw, currentPlayer }: GetStatusProps) =>
  draw ? (
    <span>Draw!</span>
  ) : (
    <>
      <span>Player</span>
      <span className="inline-block size-5">
        {win.length ? (
          currentPlayer === "x" ? (
            <OIcon />
          ) : (
            <XIcon />
          )
        ) : currentPlayer === "x" ? (
          <XIcon />
        ) : (
          <OIcon />
        )}
      </span>
      <span>{win.length ? " won!" : " move"}</span>
    </>
  );
