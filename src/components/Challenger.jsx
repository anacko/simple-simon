import React, { useEffect, useState } from "react";
import { showSequence, startGame, stopGame, resetInfo, userClick } from '../helpers/Challenger';
import './Challenger.scss'

const Challenger = function({counter, setCounter, score, setScore, sequence, setSequence, stage, setStage}) {

  const [active, setActive] = useState(['', '', '', ''])
  const [unclickable, setUnclickable] = useState('')

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

  const handleClick = (event) => userClick(event, sequence, counter, score, stage, setCounter, setScore,setStage)

  return (<div className="challenger-container">
    <table className="container">
      <tbody>
      <tr><td className="theMiddle" onClick={() => setCounter(0)}>{stage ? score : "X"}</td></tr>
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
    <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore)}>Reset Info</button>
  </div>)
};

export default Challenger;