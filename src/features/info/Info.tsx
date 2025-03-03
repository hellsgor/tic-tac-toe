import classes from './Info.module.css';
import { InfoData } from '../../models';
import { useAppSelector } from '../../App/hooks';

const Info = () => {
  const data: InfoData = useAppSelector((state) => state.info);

  return (
    <div className={classes.info}>
      <span>Player</span>
      <span
        className={`${classes.player} ${
          data.currentPlayer === 'o' ? classes.o : classes.x
        }`}
      ></span>
      <span>move #{data.move}</span>
    </div>
  );
};

export default Info;
