import classes from './Cell.module.css';
import { CellProps } from '../../models';

export const Cell = ({ value }: CellProps) => {
  return <button className={classes.cell}>{value}</button>;
};
