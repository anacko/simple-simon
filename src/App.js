import { useState } from 'react';
import './App.scss';
import GameControls from './components/GameControls';
import Challenger from './components/Challenger';
import PlayerInfo from './components/PlayerInfo';
import { getInfo } from './helpers/PlayerInfo';

function App() {

  const [counter, setCounter] = useState(0);
  const [playInfo, setPlayInfo] = useState(getInfo())
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [sound, setSound] = useState('true');
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState('invisible')

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <GameControls 
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        sound={sound} setSound={setSound}
        setCounter={setCounter} setSequence={setSequence}
        visible={visible} setVisible={setVisible}
      />
      
      <Challenger 
      stage={stage} setStage={setStage}
      score={score} setScore={setScore} 
      counter={counter} setCounter={setCounter} 
      sequence={sequence} setSequence={setSequence}
      sound={sound} setPlayInfo={setPlayInfo}/>
      
      <PlayerInfo 
      playInfo={playInfo} setPlayInfo={setPlayInfo}
      setStage={setStage} setSequence={setSequence} setCounter={setCounter} setScore={setScore}/>
    </div>
  );
}

export default App;
