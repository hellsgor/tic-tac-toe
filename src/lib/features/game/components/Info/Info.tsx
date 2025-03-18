import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { InfoProps } from "@/models";
import { getString } from "@/helpers/getString";
import { Button } from "@/UI/Button/Button";
import { reset } from "../../game";
import { getStatus } from "./getStatus";
import InfoRow from "./Row";

export default function Info({ classes, win, draw }: InfoProps) {
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
        <InfoRow>
          <span>Move #{win || draw ? move - 1 : move}</span>
        </InfoRow>
        <InfoRow>{getStatus({ win, draw, currentPlayer })}</InfoRow>
      </div>

      <Button onClick={handleResetBtnClick}>Start new game</Button>
    </div>
  );
}
