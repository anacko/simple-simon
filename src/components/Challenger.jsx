import React, { useEffect, useState } from "react";
import { makeSequence } from '../helpers/makeSequence';
import './Challenger.css'

const Challenger = function(props) {

  const [stage, setStage] = useState(3);
  const [sequence, setSequence] = useState(makeSequence(stage));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSequence(makeSequence(stage));
  }, [stage])

  const handleClick = function(event) {
    const option = Number(event.target.id)
    option === sequence[counter] ? console.log("yay!") : console.log("nops")
    setCounter(counter+1)

    if (counter === stage - 1) {
      setCounter(0)
      setStage(stage+1)
    }
    return option
  }

  return (<>
  {sequence? <p>{sequence}</p> : <p>No sequence defined.</p>}

  <table className="container">
    <tbody>
    <tr><td className="theMiddle">{stage}</td></tr>
    <tr>
      <td className="button1" id="0" onClick={handleClick}>Button 0</td>
      <td className="button2" id="1" onClick={handleClick}>Button 1</td>
    </tr>
    <tr>
      <td className="button3" id="2" onClick={handleClick}>Button 2</td>
      <td className="button4" id="3" onClick={handleClick}>Button 3</td>
    </tr>
    </tbody>
  </table>

  </>)
};

export default Challenger;