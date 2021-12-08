import React, { useEffect, useState } from "react";
import { makeSequence, makeActive } from '../helpers/Challenger';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(1);
  const [sequence, setSequence] = useState(makeSequence(stage));
  const [active, setActive] = useState(['', '', '', ''])
  const [counter, setCounter] = useState(0);
  
  useEffect(() => { setSequence(makeSequence(stage)) }, [stage])
  useEffect(() => {
    setTimeout(() => {
      for(let i = 0; i < sequence.length; i++) {
        setTimeout(() => {
          makeActive(sequence[i], setActive)
          setTimeout(() => setActive(['', '', '', '']), 600)
        }, 1200*i)
      }
    }, 500)
  }, [sequence])

  const handleClick = function(event) {

    if (Number(event.target.id) === sequence[counter]) {
    //Correct option
      setCounter(counter+1)

      if (counter === stage - 1) {
        setCounter(0)
        setStage(stage+1)
      }
    } else {
    // Wrong option
      setCounter(0)
    }
  }

  const resetGame = function() {
    clearTimeout();
    setCounter(0);
    setStage(1)
  }

  return (<>
    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{stage}</td></tr>
      <tr>
        <td className={`button-b0 ${active[0]}`} id="0" onClick={handleClick}/>
        <td className={`button-b1 ${active[1]}`} id="1" onClick={handleClick}/>
      </tr>
      <tr>
        <td className={`button-b2 ${active[2]}`} id="2" onClick={handleClick}/>
        <td className={`button-b3 ${active[3]}`} id="3" onClick={handleClick}/>
      </tr>
      </tbody>
    </table>
    <button onClick={() => resetGame()}>Reset Game</button>
  </>)
};

export default Challenger;