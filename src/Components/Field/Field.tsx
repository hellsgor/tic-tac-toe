import classes from './Field.module.css';
import { Cell } from '../Cell/Cell';
import { FieldProps } from '../../models';

export const Field = ({ cells }: FieldProps) => {
  console.log(cells);
  return (
    <div className={classes.field}>
      {cells.map((cell, idx) => (
        <Cell key={idx} value={cell} />
      ))}
    </div>
  );
};
