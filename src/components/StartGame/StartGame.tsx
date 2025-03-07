import { memo } from 'react';
import { Button } from '../UI/button/button';
import { useAppDispatch } from '../../App/hooks';
import { resetField } from '../../features/field';
import { resetInfo } from '../../features/info';

const StartGame = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(resetField());
    dispatch(resetInfo());
  };

  return <Button onClick={handleButtonClick}>Start new game</Button>;
};

export const StartGameMemoized = memo(StartGame);
