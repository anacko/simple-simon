import React from "react";
import { makeSequence } from "../helpers/makeSequence";

import './Challenger.css'

const Challenger = function(props) {

  const sequence = makeSequence(props.stage)

  return (<>
  <p>{sequence}</p>

  {/* <container>
  <div className="button1">Button 1</div>
  <div className="button2">Button 2</div>
  <div className="button3">Button 3</div>
  <div className="button4">Button 4</div>
  </container> */}

  <table className="container">
    <div className="theMiddle"></div>
    <tr>
      <td className="button1">Button 1</td>
      <td className="button2">Button 2</td>
    </tr>
    <tr>
      <td className="button3">Button 3</td>
      <td className="button4">Button 4</td>
    </tr>
  </table>

  </>)
};

export default Challenger;