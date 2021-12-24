import React from "react";
import { startGame } from "./GameControls";

const getInfo = (info: string = 'simonPlayInfo') => {
  if (localStorage.getItem(info)) {
    return JSON.parse(String(localStorage.getItem(info)))
  } else {
    return { bestScore: 0, longestSequence: 0, timesPlayed: 0 }
  }
};

const updateInfo = (score: number, counter: number, stage: number) => {
  const newInfo = {...getInfo()};
  newInfo.timesPlayed++;
  if (score > newInfo.bestScore) { newInfo.bestScore = score };
  if (counter > newInfo.longestSequence) { newInfo.longestSequence = counter };
  if (stage - 1 > newInfo.longestSequence) { newInfo.longestSequence = stage - 1 };
  return newInfo;
}

const setInfo = (info: object, 
  setPlayInfo: React.Dispatch<React.SetStateAction<Object>>, 
  localKey: string = 'simonPlayInfo'
  ) => {
  setPlayInfo(info);
  localStorage.setItem(localKey, JSON.stringify(info))
};

const resetInfo = (setStage: React.Dispatch<React.SetStateAction<number>>,
  setSequence: React.Dispatch<React.SetStateAction<Array<number>>>, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setPlayInfo: React.Dispatch<React.SetStateAction<Object>>,
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  startGame(setSequence, setCounter, setScore, setStage, setIsRunning);
  setInfo({ bestScore: 0, longestSequence: 0, timesPlayed: 0 }, setPlayInfo);
  setStage(0);
};


export { getInfo, setInfo, updateInfo, resetInfo }