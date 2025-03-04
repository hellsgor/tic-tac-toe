import { useAppSelector } from '../App/hooks';
import { CellValue } from '../models';
import { WIN_COMBINATIONS } from '../constants/';

export const useWinChecker = () => {
  const cells = useAppSelector((state) => state.field.value);

  return useAppSelector((state) => state.info.move) > 4
    ? WIN_COMBINATIONS.filter((combination) => {
        const reference: CellValue = cells[combination[0]];

        if (!reference) return;

        return combination.every(
          (combinationCell) =>
            !!cells[combinationCell] && cells[combinationCell] === reference,
        );
      })
    : [];
};
