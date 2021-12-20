import React from "react";
import { setInfo, updateInfo } from "./PlayerInfo";

// Buttons behavior
const playSound = (n: number) => {
  const tones = ['E-4', 'A-4', 'Csharp-4', 'E-3']
  const audio = new Audio(`sound/${tones[n]}.wav`)
  return audio.play()
}

const makeActive = (n: number, setState: React.Dispatch<React.SetStateAction<any>>) => {
  setState(() => {
    const newStatus = [];
    for(let i = 0; i < 4; i++) {
      i === n ? newStatus.push('active') : newStatus.push('');
    }
    return newStatus;
  });
};

// timeouts - startSequence() - stopSequence():
// https://stackoverflow.com/a/25311947/6364828
const timeouts: Array<any> = [];
const showSequence = (
  sequence: Array<number>, sound: boolean,
  setUnclickable: React.Dispatch<React.SetStateAction<string>>, 
  setActive: React.Dispatch<React.SetStateAction<Array<string>>>
  ) => {

  setTimeout(() => {
    setTimeout(() => {
      setUnclickable('unclickable')
      timeouts.push(setTimeout(() => setUnclickable(''), sequence.length * 1200))
    }, 0)
    
    for(let i = 0; i < sequence.length; i++) {
      timeouts.push(setTimeout(() => {
        makeActive(sequence[i], setActive)
        if (sound) { playSound(sequence[i]) }
        setTimeout(() => setActive(['', '', '', '']), 600)
      }, 1200*i))
    }
  }, 600)
}

const stopSequence = () => {
  timeouts.forEach(timer => clearTimeout(timer))
}


const userClick = (event: any, sequence: Array<number>, sound: boolean,
  counter: number, score: number, stage: number, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>, 
  setStage: React.Dispatch<React.SetStateAction<number>>,
  setPlayInfo: React.Dispatch<React.SetStateAction<object>>
  ) => {

  if (Number(event.target.id) === sequence[counter]) {
  //Correct option    
    if (sound) { playSound(Number(event.target.id)) }
    setScore(score + 1)
    setCounter(counter + 1)

    if (counter === stage - 1) {
      setTimeout(() => {  
        setCounter(0)
        setStage(stage+1)
      }, 1200)
    }
  } else {
  // Wrong option
    setInfo(updateInfo(score), setPlayInfo);
    setCounter(0);
    setStage(0);
    setScore(0);
  }
}

export { showSequence, stopSequence, userClick }