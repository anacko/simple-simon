import { startGame } from "./GameControls"

const resetInfo = (setStage: React.Dispatch<React.SetStateAction<number>>,
  setSequence: React.Dispatch<React.SetStateAction<Array<number>>>, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>
  ) => {
  startGame(setSequence, setCounter, setScore, setStage);
  localStorage.setItem('bestScore', '0');
  localStorage.setItem('timesPlayed', '0');
  setStage(0);
}


export { resetInfo }