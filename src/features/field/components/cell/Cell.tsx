import classes from './Cell.module.css';
import { CellProps } from '../../../../models';

export const Cell = ({ value, index }: CellProps) => {
  return (
    <button className={classes.cell} data-index={index}>
      {value}
    </button>
  );
};
