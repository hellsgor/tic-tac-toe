import classes from './Field.module.css';
import { MemoizedCell } from '../cell/Cell';
import { useAppSelector } from '../../../../App/hooks';

export const Field = () => {
  const cells = useAppSelector((state) => state.field.value);

  return (
    <div className={classes.field}>
      {cells.map((cell, idx) => (
        <MemoizedCell key={idx} value={cell} index={idx} />
      ))}
    </div>
  );
};
