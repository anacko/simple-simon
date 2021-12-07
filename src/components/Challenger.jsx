import React, { useEffect, useState } from "react";
import { makeSequence } from '../helpers/makeSequence';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(1);
  const [sequence, setSequence] = useState(makeSequence(stage));
  const [counter, setCounter] = useState(0);

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
    <tr><td className="theMiddle">{stage}</td></tr>
    <tr>
      <td className="button-b0" id="0" onClick={handleClick}>Button 0</td>
      <td className="button-b1" id="1" onClick={handleClick}>Button 1</td>
    </tr>
    <tr>
      <td className="button-b2" id="2" onClick={handleClick}>Button 2</td>
      <td className="button-b3" id="3" onClick={handleClick}>Button 3</td>
    </tr>
    </tbody>
  </table>

  </>)
};

export default Challenger;