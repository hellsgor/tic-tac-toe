import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { getString } from "@/helpers/getString";
import { Button } from "@/UI/Button/Button";
import { GameState, reset } from "../../game";

export default function Info({ classes, win, draw }: InfoProps) {
  const rowClasses = "flex items-center gap-x-1 text-base";

  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const dispatch = useAppDispatch();

  const handleResetBtnClick = () => {
    dispatch(reset());
  };

  return (
    <div className={getString(classes)}>
      <div className="bg-dark-bg flex min-w-xs flex-auto flex-col gap-y-1 rounded-lg p-4">
        <h4 className="mb-4 text-xl font-bold">Info: </h4>
        <p className={rowClasses}>
          <span>Move #{win || draw ? move - 1 : move}</span>
        </p>
        <p className={rowClasses}>{getStatus({ win, draw, currentPlayer })}</p>
        {/* <p className={rowClasses}>
          <span>Next move in:</span>
        </p> */}
      </div>

      <Button onClick={handleResetBtnClick}>Start new game</Button>
    </div>
  );
}

type GetStatusProps = Omit<InfoProps, "classes"> &
  Pick<GameState, "currentPlayer">;

const getStatus = ({ win, draw, currentPlayer }: GetStatusProps) =>
  draw ? (
    <span>The game ended with a draw</span>
  ) : (
    <>
      <span>Player</span>
      <span
        className={`inline-block size-6 bg-[url(/icons/${win.length ? (currentPlayer === "x" ? "o" : "x") : currentPlayer}.svg)] bg-contain bg-center bg-no-repeat`}
      ></span>
      <span>{win.length ? " won!" : " move"}</span>
    </>
  );
