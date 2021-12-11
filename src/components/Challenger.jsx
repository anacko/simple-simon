import React, { useEffect, useState } from "react";
import { makeActive } from '../helpers/Challenger';
import './Challenger.scss'

const Challenger = function(props) {

  const [stage, setStage] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [active, setActive] = useState(['', '', '', ''])
  const [unclickable, setUnclickable] = useState('')
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);

  const storedBestScore = Number(localStorage.getItem('bestScore'))
  const [bestScore, setBestScore] = useState(
    Number.isInteger(storedBestScore) ? storedBestScore : 0
  )
  const storedTimesPlayed = Number(localStorage.getItem('timesPlayed'))
  const [timesPlayed, setTimesPlayed] = useState(
    Number.isInteger(storedTimesPlayed) ? storedTimesPlayed : 0
  )

  useEffect(() => { localStorage.setItem('bestScore', String(bestScore)) }, [bestScore])
  useEffect(() => { localStorage.setItem('timesPlayed', String(timesPlayed)) }, [timesPlayed])

  useEffect(() => {
    setSequence(prev => stage === 0 ? [] : [...prev, Math.floor(Math.random()*4)]) 
  }, [stage])
  
  useEffect(() => {
    setTimeout(() => {

      setTimeout(() => {
        setUnclickable('unclickable')
        setTimeout(() => setUnclickable(''), (sequence.length) * 1200)
      }, 0)
      
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
      if (stage) { localStorage.setItem('timesPlayed', Number(localStorage.getItem('timesPlayed')) + 1) };
      if (points > localStorage.getItem('bestScore')) { localStorage.setItem('bestScore', points); }
      clearTimeout();
      setCounter(0);
      setStage(0);
      setPoints(0);
    }
  }

  const startGame = () => {
    setSequence([]);
    clearTimeout();
    setCounter(0);
    setPoints(0);
    setStage(1)
  }

  const resetInfo = () => {
    startGame();
    localStorage.setItem('bestScore', 0)
    localStorage.setItem('timesPlayed', 0)
    setStage(0);
  }

  return (<div className="challenger-container">
    <button onClick={startGame}>Start Game</button>
    <h3>Stage: {stage}</h3>
    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{points}</td></tr>
      <tr>
        <td className={`button-b0 ${active[0]} ${unclickable}`} id="0" onClick={handleClick}/>
        <td className={`button-b1 ${active[1]} ${unclickable}`} id="1" onClick={handleClick}/>
      </tr>
      <tr>
        <td className={`button-b2 ${active[2]} ${unclickable}`} id="2" onClick={handleClick}/>
        <td className={`button-b3 ${active[3]} ${unclickable}`} id="3" onClick={handleClick}/>
      </tr>
      </tbody>
    </table>
    <h3>Best Score: {localStorage.getItem('bestScore') || 0}</h3>
    <p>{localStorage.getItem('timesPlayed') || 0} {localStorage.getItem('timesPlayed') === '1' ? 'time' : 'times'} played</p>
    <button onClick={resetInfo}>Reset Info</button>
  </div>)
};

export default Challenger;