import About from "./About";
import { startGame, stopGame } from '../helpers/GameControls';
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'
import mute from '../imgs/_128-mute.png'
import unmute from '../imgs/_128-speaker.png'
import './GameControls.scss'

function GameControls({stage, setStage, score, setScore, setCounter, setSequence, sound, setSound}) {

  const startRound = <img type="button" src={play} width="40" height="40" alt="Play" title="Start Round"
    onClick={() => startGame(setSequence, setCounter, setScore, setStage)}/>

  const stopRound = <img type="button" src={stop} width="40" height="40" alt="Stop" title="Stop Round"
    onClick={() => stopGame(setStage, stage, score)}/>
  
  const muteSound = <img type="button" src={mute} width="40" height="40" alt="Mute" title="Mute"
    onClick={() => setSound(false)}/>

  const unmuteSound = <img type="button" src={unmute} width="40" height="40" alt="Mute" title="Unmute"
    onClick={() => setSound(true)}/>

  return (<div className="buttons-container">
      {stage ? stopRound : startRound}
      {sound ? muteSound : unmuteSound}
      <About />
  </div>);
}

export default GameControls;