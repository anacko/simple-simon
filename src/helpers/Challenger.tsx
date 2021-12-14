const makeSequence = function(size: number, n: number = 4) {
  const sequence = [];
  for(let i = 0; i < size; i++) {
    sequence.push(Math.floor(Math.random()*n))
  }
  return sequence;
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

const showSequence = (sequence: Array<number>, 
  setUnclickable: React.Dispatch<React.SetStateAction<string>>, 
  setActive: React.Dispatch<React.SetStateAction<Array<string>>>) => {


  setTimeout(() => {
    setTimeout(() => {
      setUnclickable('unclickable')
      setTimeout(() => setUnclickable(''), sequence.length * 1200)
    }, 0)
    
    for(let i = 0; i < sequence.length; i++) {
      setTimeout(() => {
        makeActive(sequence[i], setActive)
        setTimeout(() => setActive(['', '', '', '']), 600)
      }, 1200*i)
    }
  }, 600)
}

export { makeSequence, showSequence }