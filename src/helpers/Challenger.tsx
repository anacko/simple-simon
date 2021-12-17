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

const makeActive = (n: number, 
  setState: React.Dispatch<React.SetStateAction<any>>) => {
  
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
const showSequence = (sequence: Array<number>, 
  setUnclickable: React.Dispatch<React.SetStateAction<string>>, 
  setActive: React.Dispatch<React.SetStateAction<Array<string>>>) => {


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

export { makeSequence, showSequence, stopSequence, playSound }