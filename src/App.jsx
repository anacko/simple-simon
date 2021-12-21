import { useState } from 'react';
import './App.scss';
import GameControls from './components/GameControls';
import Challenger from './components/Challenger';
import PlayInfo from './components/PlayInfo';
import About from './components/About';
import { getInfo } from './helpers/PlayInfo';

function App() {

  const [counter, setCounter] = useState(0);
  const [playInfo, setPlayInfo] = useState(getInfo())
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [sound, setSound] = useState('true');
  const [stage, setStage] = useState(0);

  const [viewComponents, setViewComponents] = useState(['Challenger'])

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <GameControls 
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        sound={sound} setSound={setSound}
        setCounter={setCounter} setSequence={setSequence}
        viewComponents={viewComponents} setViewComponents={setViewComponents}
        setPlayInfo={setPlayInfo}
      />

      {viewComponents.includes('About')? <About /> : null}
      
      {viewComponents.includes('Challenger') &&
      <Challenger 
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        counter={counter} setCounter={setCounter} 
        sequence={sequence} setSequence={setSequence}
        sound={sound} setPlayInfo={setPlayInfo}
      />
      }
      
      <PlayInfo 
        playInfo={playInfo} setPlayInfo={setPlayInfo}
        setStage={setStage} setSequence={setSequence} setCounter={setCounter} setScore={setScore}
        viewComponents={viewComponents} setViewComponents={setViewComponents}
      />

    </div>
  );
}

export default App;
