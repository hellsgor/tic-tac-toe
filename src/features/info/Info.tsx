import classes from './Info.module.css';
import { InfoData, InfoProps } from '../../models';
import { useAppSelector } from '../../App/hooks';

const Info = ({ win, draw }: InfoProps) => {
  const data: InfoData = useAppSelector((state) => state.info);

  const getPlayerIconClasses = [
    `${classes.player}`,
    classes[
      `${win ? (data.currentPlayer === 'o' ? 'x' : 'o') : data.currentPlayer}`
    ],
  ]
    .join(' ')
    .trim();

  return (
    <div className={classes.info}>
      {draw ? (
        <>
          <span>The game ended with a draw</span>
        </>
      ) : (
        <>
          <span>Player</span>
          <span className={getPlayerIconClasses}></span>
          <span>{win ? 'won!' : `move #${data.move}`}</span>
        </>
      )}
    </div>
  );
};

export default Info;
