import { InfoProps } from "@/models";
import { GameState } from "../../game";

type GetStatusProps = Omit<InfoProps, "classes"> &
  Pick<GameState, "currentPlayer">;

export const getStatus = ({ win, draw, currentPlayer }: GetStatusProps) =>
  draw ? (
    <span>The game ended with a draw</span>
  ) : (
    <>
      <span>Player</span>
      <span
        className={`inline-block size-5 bg-[url(/icons/${win.length ? (currentPlayer === "x" ? "o" : "x") : currentPlayer}.svg)] bg-contain bg-center bg-no-repeat`}
      ></span>
      <span>{win.length ? " won!" : " move"}</span>
    </>
  );
