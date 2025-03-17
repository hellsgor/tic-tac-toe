import { useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { getString } from "@/helpers/getString";

const Info = ({ classes, gameCheck }: InfoProps) => {
  const rowClasses = "flex items-center gap-x-1 text-base";

  const { win, draw } = gameCheck;

  const move = useAppSelector((state) => state.game.move);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const getGameStatus = () =>
    draw ? (
      <>
        <span>The game ended with a draw</span>
      </>
    ) : (
      <>
        <span>Player</span>
        <span
          className={`inline-block size-6 bg-[url(/icons/${win ? (currentPlayer === "x" ? "o" : "x") : currentPlayer}.svg)] bg-contain bg-center bg-no-repeat`}
        ></span>
        <span>{win.length ? " won!" : " move"}</span>
      </>
    );
  console.log("Info");
  return (
    <div className={getString(classes)}>
      <div className="bg-dark-bg flex h-full min-w-xs flex-col gap-y-2 rounded-lg p-4">
        <h4 className="text-xl font-bold">Info: </h4>
        <p className={rowClasses}>
          <span>Move #{win || draw ? move - 1 : move}</span>
        </p>
        <p className={rowClasses}>{getGameStatus()}</p>
        {/* <p className={rowClasses}>
          <span>Next move in:</span>
        </p> */}
      </div>
    </div>
  );
};

export default Info;
