import React, { useEffect, useState } from "react";
import { makeSequence } from '../helpers/makeSequence';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(1);
  const [sequence, setSequence] = useState(makeSequence(stage));
  const [counter, setCounter] = useState(0);

  const makeActive = (n, active) => {
    if(active) {
      return `button-b${n} active`;
    } else {
      return `button-b${n}`
    }
  }  

  useEffect(() => {
    setSequence(makeSequence(stage));

  }, [stage])

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
      <td className={makeActive(0, false)} id="0" onClick={handleClick}>Button 0</td>
      <td className={makeActive(1, false)} id="1" onClick={handleClick}>Button 1</td>
    </tr>
    <tr>
      <td className={makeActive(2, false)} id="2" onClick={handleClick}>Button 2</td>
      <td className={makeActive(3, false)} id="3" onClick={handleClick}>Button 3</td>
    </tr>
    </tbody>
  </table>

  </>)
};

export default Challenger;