
import './App.scss';
import Challenger from './components/Challenger';
import About from './components/About';
import info from './imgs/_128-info.png';

function App() {

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <p>Press Start Game to begin</p>
      <img src={info} width="64" height="64"/>
      <About />
      <Challenger />
      <p>Progress is stored locally. Press Reset Info to reset it.</p>
    </div>
  );
}

export default App;
