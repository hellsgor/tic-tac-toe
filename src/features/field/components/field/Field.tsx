import classes from './Field.module.css';
import { MemoizedCell } from '../cell/Cell';
import { useAppSelector } from '../../../../App/hooks';
import { FieldProps } from '../../../../models';

export const Field = ({ winCombination }: FieldProps) => {
  const cells = useAppSelector((state) => state.field.value);

  return (
    <div
      className={classes.field}
      style={winCombination.length ? { pointerEvents: 'none' } : {}}
    >
      {cells.map((cell, idx) => (
        <MemoizedCell
          key={idx}
          value={cell}
          index={idx}
          win={!!winCombination.length && winCombination.includes(idx)}
        />
      ))}
    </div>
  );
};
