import './App.css';
import { useAppSelector } from './App/hooks';
import { Field } from './features/field';
import { Info } from './features/info';
import { useWinChecker } from './hooks/useWinChecker';

function App() {
  const win = useWinChecker();
  const move = useAppSelector((state) => state.info.move);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Info draw={move > 9 && !win.length} win={!!win.length} />
      <Field winCombination={win.length ? win[0] : []} />
    </>
  );
}

export default App;
