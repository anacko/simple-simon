const makeSequence = function(size: number, n: number = 4) {
  const sequence = [];
  for(let i = 0; i < size; i++) {
    sequence.push(Math.floor(Math.random()*n))
  }
  return sequence;
}

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
  sequence: Array<number>, 
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
        playSound(sequence[i])
        setTimeout(() => setActive(['', '', '', '']), 600)
      }, 1200*i))
    }
  }, 600)
}

const stopSequence = () => {
  timeouts.forEach(timer => clearTimeout(timer))
}


const userClick = function(event: any, sequence: Array<number>,
  counter: number, score: number, stage: number, 
  setCounter: React.Dispatch<React.SetStateAction<number>>, 
  setScore: React.Dispatch<React.SetStateAction<number>>, 
  setStage: React.Dispatch<React.SetStateAction<number>>) {

  if (Number(event.target.id) === sequence[counter]) {
  //Correct option    
    playSound(Number(event.target.id))
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
    if (stage) { localStorage.setItem('timesPlayed', String(Number(localStorage.getItem('timesPlayed'))) + 1) };
    if (score > Number(localStorage.getItem('bestScore'))) { localStorage.setItem('bestScore', String(score)); }
    clearTimeout();
    setCounter(0);
    setStage(0);
    setScore(0);
  }
}

// Game Actions
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

export { makeSequence, showSequence, stopSequence, playSound, startGame, stopGame, resetInfo, userClick }