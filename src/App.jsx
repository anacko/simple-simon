import { useState } from 'react';
import './App.scss';
import GameControls from './components/GameControls';
import Challenger from './components/Challenger';
import PlayInfo from './components/PlayInfo';
import GameInfoSection from './components/GameInfoSection';
import PlayInfoSection from './components/PlayInfoSection';
import { getInfo } from './helpers/PlayInfo';

function App() {

  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [playInfo, setPlayInfo] = useState(getInfo())
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [sound, setSound] = useState('true');
  const [stage, setStage] = useState(0);

  const [viewComponents, setViewComponents] = useState('Challenger')

  return (
    <div className="App">
      <h1>Simple Simon Game</h1>
      <GameControls 
        isRunning={isRunning} setIsRunning={setIsRunning}
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        sound={sound} setSound={setSound}
        counter={counter} setCounter={setCounter} 
        setSequence={setSequence}
        setViewComponents={setViewComponents}
        setPlayInfo={setPlayInfo}
      />

      {viewComponents === 'Game Info' && 
        <GameInfoSection 
          viewComponents={viewComponents} setViewComponents={setViewComponents}
        />}
      
      {viewComponents === 'Challenger' &&
      <Challenger 
        isRunning={isRunning} setIsRunning={setIsRunning}
        stage={stage} setStage={setStage}
        score={score} setScore={setScore} 
        counter={counter} setCounter={setCounter} 
        sequence={sequence} setSequence={setSequence}
        sound={sound} setPlayInfo={setPlayInfo}
      />
      }

      {viewComponents === 'Play Info' && 
      <PlayInfoSection
      viewComponents={viewComponents} setViewComponents={setViewComponents}
      playInfo={playInfo} setPlayInfo={setPlayInfo} 
      setStage={setStage} setSequence={setSequence}
      setCounter={setCounter} setScore={setScore}
      setIsRunning={setIsRunning}
      />}
      
      <PlayInfo 
        isRunning={isRunning} setIsRunning={setIsRunning} 
        playInfo={playInfo} setPlayInfo={setPlayInfo}
        viewComponents={viewComponents} setViewComponents={setViewComponents}
      />

    </div>
  );
}

export default App;
