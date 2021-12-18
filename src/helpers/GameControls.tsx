import { stopSequence } from "./Challenger";

const startGame = (
  setSequence: React.Dispatch<React.SetStateAction<Array<number>>>, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>, 
  setStage: React.Dispatch<React.SetStateAction<number>>
  ) => {
  setSequence([]);
  setCounter(0);
  setScore(0);
  setStage(1)
}

const stopGame = (setStage: React.Dispatch<React.SetStateAction<number>>, stage: number, score: number) => {
  stopSequence();
  setStage(0);
  if (stage) { localStorage.setItem('timesPlayed', String(Number(localStorage.getItem('timesPlayed')) + 1)) };
  if (score > Number(localStorage.getItem('bestScore'))) { localStorage.setItem('bestScore', String(score)); }
}

export { startGame, stopGame }