import React from "react";
import { makeSequence } from "../helpers/makeSequence";

const Challenger = function(props) {

  const sequence = makeSequence(4)

  return (<>
  <p>{props.stage}</p>
  <p>{sequence}</p>
  </>)
};

export default Challenger;