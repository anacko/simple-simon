
import './App.scss';
import Challenger from './components/Challenger';

function App() {

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <p>Press Start Game to begin</p>
      <Challenger />
      <p>Progress is stored locally. Press Reset Info to reset it.</p>
    </div>
  );
}

export default App;
