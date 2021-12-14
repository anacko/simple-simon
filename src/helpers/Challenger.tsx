const makeSequence = function(size, n = 4) {
  const sequence = [];
  for(let i = 0; i < size; i++) {
    sequence.push(Math.floor(Math.random()*n))
  }
  return sequence;
}

const showSequence = (sequence, setUnclickable, setActive) => {
  const makeActive = (n, setState) => {
    setState(() => {
      const newStatus = [];
      for(let i = 0; i < 4; i++) {
        i === n ? newStatus.push('active') : newStatus.push('');
      }
      return newStatus;
    });
  };

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