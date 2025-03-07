import { memo, useCallback } from 'react';
import { Button } from '../UI/button/button';
import { useAppDispatch } from '../../App/hooks';
import { resetField } from '../../features/field';
import { resetInfo } from '../../features/info';

const StartGame = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(resetField());
    dispatch(resetInfo());
  }, [dispatch]);

  return <Button onClick={handleButtonClick}>Start new game</Button>;
};

export const StartGameMemoized = memo(StartGame);
