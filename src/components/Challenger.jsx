import React, { useEffect, useState } from "react";
import { showSequence, stopSequence } from '../helpers/Challenger';
import About from "./About";
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'
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
    showSequence(sequence, setUnclickable, setActive)
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
    clearTimeout(showSequence);
    setCounter(0);
    setPoints(0);
    setStage(1)
  }

  const stopGame = () => {
    stopSequence();
    setStage(0);
    if (stage) { localStorage.setItem('timesPlayed', Number(localStorage.getItem('timesPlayed')) + 1) };
    if (points > localStorage.getItem('bestScore')) { localStorage.setItem('bestScore', points); }
  }

  const resetInfo = () => {
    startGame();
    localStorage.setItem('bestScore', 0)
    localStorage.setItem('timesPlayed', 0)
    setStage(0);
  }

  const startRound = <img type="button" src={play} width="40" height="40" alt="Play" onClick={startGame}/>
  const stopRound = <img type="button" src={stop} width="40" height="40" alt="Play" onClick={stopGame}/>

  return (<div className="challenger-container">
    <div className="buttons-container">
      {stage ? stopRound : startRound}
      <About />
    </div>
    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{stage ? points : startRound}</td></tr>
      <tr>
        <td type="button" className={`button-b0 ${active[0]} ${unclickable}`} id="0" onClick={handleClick}/>
        <td type="button" className={`button-b1 ${active[1]} ${unclickable}`} id="1" onClick={handleClick}/>
      </tr>
      <tr>
        <td type="button" className={`button-b2 ${active[2]} ${unclickable}`} id="2" onClick={handleClick}/>
        <td type="button" className={`button-b3 ${active[3]} ${unclickable}`} id="3" onClick={handleClick}/>
      </tr>
      </tbody>
    </table>
    <h3>Best Score: {localStorage.getItem('bestScore') || 0}</h3>
    <p>{localStorage.getItem('timesPlayed') || 0} {localStorage.getItem('timesPlayed') === '1' ? 'time' : 'times'} played</p>
    <button onClick={resetInfo}>Reset Info</button>
  </div>)
};

export default Challenger;