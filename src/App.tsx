import './App.css';
import { Field } from './features/field';
import { Info } from './features/info';
import { useWinChecker } from './hooks/useWinChecker';

function App() {
  const win = useWinChecker();
  console.log(win);
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Info />
      <Field />
    </>
  );
}

export default App;
