import classes from './Cell.module.css';
import { CellProps } from '../../../../models';
import { useAppDispatch } from '../../../../App/hooks';
import { setSymbol } from '../../fieldSlice';
import { incrementMove, setCurrentPlayer } from '../../../info';
import { memo } from 'react';

const Cell = ({ value, index }: CellProps) => {
  const mod = [classes.cell, classes[`${value}`]].join(' ');

  const dispatch = useAppDispatch();

  const handleCellClick = () => {
    if (value) return;

    dispatch((dispatch, getState) => {
      dispatch(setSymbol({ index, symbol: getState().info.currentPlayer }));
      dispatch(setCurrentPlayer());
      dispatch(incrementMove());
    });
  };

  return (
    <button
      className={mod}
      onClick={handleCellClick}
      disabled={!!value}
    ></button>
  );
};

export const MemoizedCell = memo(Cell);
