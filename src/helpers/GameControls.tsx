import React from "react";
import { stopSequence } from "./Challenger";
import { setInfo, updateInfo } from "./PlayerInfo";

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

const stopGame = (score: number,
  setStage: React.Dispatch<React.SetStateAction<number>>, 
  setPlayInfo: React.Dispatch<React.SetStateAction<object>>
  ) => {
  stopSequence();
  setStage(0);
  setInfo(updateInfo(score), setPlayInfo);
}

export { startGame, stopGame }