import About from "./About";
import { showSequence, startGame, stopGame, resetInfo, userClick } from '../helpers/Challenger';
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'

function GameControls({stage, setStage, score, setScore, setCounter, setSequence}) {

  const startRound = <img type="button" src={play} width="40" height="40" alt="Play" 
    onClick={() => startGame(setSequence, setCounter, setScore, setStage)}/>

  const stopRound = <img type="button" src={stop} width="40" height="40" alt="Play" 
    onClick={() => stopGame(setStage, stage, score)}/>

  return (<>
      <p>Game Controls</p>
      {stage ? stopRound : startRound}
      <About />
  </>);
}

export default GameControls;