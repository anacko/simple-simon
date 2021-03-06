import { startGame, stopGame } from '../helpers/GameControls';
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'
import mute from '../imgs/_128-mute.png'
import unmute from '../imgs/_128-speaker.png'
import info from '../imgs/_128-info.png'
import './GameControls.scss'

function GameControls({isRunning, setIsRunning, stage, setStage, score, setScore, counter, setCounter, setSequence, 
  sound, setSound, setPlayInfo, setViewComponents}) {

  const startRound = <img type="button" src={play} width="40" height="40" alt="Play" title="Start Round"
    onClick={() => startGame(setSequence, setCounter, setScore, setStage, setIsRunning)}/>

  const stopRound = <img type="button" src={stop} width="40" height="40" alt="Stop" title="Stop Round"
    onClick={() => stopGame(score, counter, stage, setStage, setPlayInfo, setIsRunning)}/>
  
  const muteSound = <img type="button" src={mute} width="40" height="40" alt="Mute" title="Mute"
    onClick={() => setSound(false)}/>

  const unmuteSound = <img type="button" src={unmute} width="40" height="40" alt="Unmute" title="Unmute"
    onClick={() => setSound(true)}/>

  const showGameInfo = <img type="button" src={info} width="40" height="40" alt="Game Info" title="Game Info"
    onClick={() => setViewComponents(isRunning ? 'Challenger' : 'Game Info')}/>

  return (<div className="buttons-container">
      {showGameInfo}
      {stage ? stopRound : startRound}
      {sound ? muteSound : unmuteSound}
  </div>);
}

export default GameControls;