import React, { useEffect, useState } from "react";
import { makeSequence, makeActive } from '../helpers/Challenger';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(0);
  // const [sequence, setSequence] = useState(makeSequence(stage));
  const [sequence, setSequence] = useState([]);
  const [active, setActive] = useState(['', '', '', ''])
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timesPlayed, setTimesPlayed] = useState(0);

  //useEffect(() => { setSequence(makeSequence(stage)) }, [stage])
  useEffect(() => { 
    setSequence(prev => stage === 0 ? [] : [...prev, Math.floor(Math.random()*4)]) 
  }, [stage])
  
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
      setCounter(counter + 1)
      setPoints(points + 1)

      if (counter === stage - 1) {
        setCounter(0)
        setStage(stage+1)
      }
    } else {
    // Wrong option
      clearTimeout();
      setCounter(0);
      setStage(0);
      setPoints(0);
      if (stage) setTimesPlayed(timesPlayed + 1);
      if (points > bestScore) setBestScore(points);
    }
  }

  const startGame = () => {
    clearTimeout();
    setCounter(0);
    setPoints(0);
    setStage(1)
  }

  return (<div className="challenger-container">
    <button onClick={startGame}><h3>Start Game</h3></button>
    <h3>Stage: {stage}</h3>
    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{points}</td></tr>
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
    <h3>Best Score: {bestScore}</h3>
    <p>{timesPlayed} {timesPlayed === 1 ? 'time' : 'times'} played</p>
  </div>)
};

export default Challenger;