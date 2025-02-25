import './App.css';
import { Field } from './Components/Field/Field';

function App() {
  const cells = Array(9).fill(null);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Field cells={cells} />
    </>
  );
}

export default App;
