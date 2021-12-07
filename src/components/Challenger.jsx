import React, { useEffect, useState } from "react";

import './Challenger.css'

const Challenger = function(props) {

  let [counter, setCounter] = useState(0)

  const handleClick = function(event) {
    setCounter(counter++)
    //const option = Number(event.target.id)
    //return option
  }

  useEffect((event) => {
  },[counter])

  return (<>
  <p>{props.sequence}</p>

  <table className="container">
    <div className="theMiddle"><h1>{props.stage}</h1></div>
    <tr>
      <td className="button1" id="0" onClick={handleClick}>Button 0</td>
      <td className="button2" id="1" onClick={handleClick}>Button 1</td>
    </tr>
    <tr>
      <td className="button3" id="2" onClick={handleClick}>Button 2</td>
      <td className="button4" id="3" onClick={handleClick}>Button 3</td>
    </tr>
  </table>

  <p>{counter}</p>

  </>)
};

export default Challenger;