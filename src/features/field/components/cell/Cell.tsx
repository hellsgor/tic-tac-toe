import classes from './Cell.module.css';
import { CellProps } from '../../../../models';
import { useAppDispatch, useAppSelector } from '../../../../App/hooks';
import { setSymbol } from '../../fieldSlice';
import { incrementMove, setCurrentPlayer } from '../../../info';

export const Cell = ({ value, index }: CellProps) => {
  const mod = [classes.cell, classes[`${value}`]].join(' ');

  const currentPlayer = useAppSelector((state) => state.info.currentPlayer);

  const dispatch = useAppDispatch();

  const handleCellClick = () => {
    if (value) return;

    dispatch(setSymbol({ index, symbol: currentPlayer }));
    dispatch(setCurrentPlayer());
    dispatch(incrementMove());
  };

  return (
    <button
      className={mod}
      onClick={handleCellClick}
      disabled={!!value}
    ></button>
  );
};
