import { useAppSelector } from '../App/hooks';
import { CellValue } from '../models';

export const useWinChecker = () => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cells = useAppSelector((state) => state.field.value);

  const win = winCombinations.filter((combination) => {
    const reference: CellValue = cells[combination[0]];
    if (!reference) return;

    return combination.every((combinationCell) => {
      return !!cells[combinationCell] && cells[combinationCell] === reference;
    });
  });

  console.log('win', win);

  return win;
};
