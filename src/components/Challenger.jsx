import React, { useEffect, useState } from "react";
import { makeSequence } from '../helpers/makeSequence';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(1);
  const [sequence, setSequence] = useState(makeSequence(stage));
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(['', '', '', ''])

  const makeActive = (n) => {
    setActive(() => {
      const newStatus = [];
      for(let i = 0; i < 4; i++) {
        i === n ? newStatus.push('active') : newStatus.push('');
      }
      return newStatus;
    });
  };
  
  useEffect(() => { setSequence(makeSequence(stage)) }, [stage])
  useEffect(() => {
    setTimeout(() => {
      for(let i = 0; i < sequence.length; i++) {
        setTimeout(() => {
          makeActive(sequence[i])
          setTimeout(() => setActive(['', '', '', '']), 600)
        }, 1200*i)
      }
    }, 500)
  }, [sequence])



  const handleClick = function(event) {

    if (Number(event.target.id) === sequence[counter]) {
    //Correct option
      console.log("yay!")
      setCounter(counter+1)

      if (counter === stage - 1) {
        setCounter(0)
        setStage(stage+1)
      }
    } else {
    // Wrong option
      console.log("nops")
      setCounter(0)
    }
  }

  return (<>
    {sequence? <p>{sequence}</p> : <p>No sequence defined.</p>}

    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{stage}</td></tr>
      <tr>
        <td className={`button-b0 ${active[0]}`} id="0" onClick={handleClick}>Button 0</td>
        <td className={`button-b1 ${active[1]}`} id="1" onClick={handleClick}>Button 1</td>
      </tr>
      <tr>
        <td className={`button-b2 ${active[2]}`} id="2" onClick={handleClick}>Button 2</td>
        <td className={`button-b3 ${active[3]}`} id="3" onClick={handleClick}>Button 3</td>
      </tr>
      </tbody>
    </table>

  </>)
};

export default Challenger;