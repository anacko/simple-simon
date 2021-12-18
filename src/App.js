import { useState } from 'react';
import './App.scss';
import GameControls from './components/GameControls';
import Challenger from './components/Challenger';
import PlayerInfo from './components/PlayerInfo';

function App() {

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [stage, setStage] = useState(0);

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <GameControls 
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        setCounter={setCounter} setSequence={setSequence}
      />
      
      <Challenger 
      stage={stage} setStage={setStage}
      score={score} setScore={setScore} 
      counter={counter} setCounter={setCounter} 
      sequence={sequence} setSequence={setSequence}/>
      
      <PlayerInfo />
    </div>
  );
}

export default App;
