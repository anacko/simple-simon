import React from "react";
import { stopSequence } from "./Challenger";
import { setInfo, updateInfo } from "./PlayInfo";

const startGame = (
  setSequence: React.Dispatch<React.SetStateAction<Array<number>>>, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>, 
  setStage: React.Dispatch<React.SetStateAction<number>>,
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  setIsRunning(true);
  setSequence([]);
  setCounter(0);
  setScore(0);
  setStage(1);
}

const stopGame = (score: number, counter: number, stage: number,
  setStage: React.Dispatch<React.SetStateAction<number>>, 
  setPlayInfo: React.Dispatch<React.SetStateAction<object>>,
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  stopSequence();
  setStage(0);
  setInfo(updateInfo(score, counter, stage), setPlayInfo);
  setIsRunning(false);
}

export { startGame, stopGame }