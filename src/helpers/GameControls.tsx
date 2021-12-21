import React from "react";
import { stopSequence } from "./Challenger";
import { setInfo, updateInfo } from "./PlayInfo";

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

const toggleAbout = (viewComponents: Array<string>,
  setViewComponents: React.Dispatch<React.SetStateAction<Array<string>>>) => {
  if (viewComponents.includes('About')) {
    const newComponents: Array<string> = [];
    viewComponents.map((elem: string) => elem !== 'About' ? newComponents.push(elem) : null);
    setViewComponents([...newComponents]);
  } else {
    setViewComponents([...viewComponents, 'About']);
  }
};

export { startGame, stopGame, toggleAbout }