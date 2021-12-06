const makeSequence = function(size, n = 4) {
  const sequence = [];
  for(let i = 0; i < size; i++) {
    sequence.push(Math.floor(Math.random()*n))
  }
  return sequence;
}

export { makeSequence }