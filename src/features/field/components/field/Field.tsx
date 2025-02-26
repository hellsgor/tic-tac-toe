import classes from './Field.module.css';
import { Cell } from '../cell/Cell';
import { useAppSelector } from '../../../../App/hooks';
import { CellValue } from '../../../../models';

export const Field = () => {
  const cells: CellValue[] = useAppSelector((state) => state.field.value);

  return (
    <div className={classes.field}>
      {cells.map((cell, idx) => (
        <Cell key={idx} value={cell} index={idx} />
      ))}
    </div>
  );
};
