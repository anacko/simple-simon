import { useEffect, useState } from "react";
import { resetInfo } from '../helpers/PlayerInfo';
import './Challenger.scss'

function PlayerInfo({setStage, setSequence, setCounter, setScore}) {

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


  return (<>
    <p>Player Info</p>
    <h3>Best Score: {localStorage.getItem('bestScore') || 0}</h3>
    <p>{localStorage.getItem('timesPlayed') || 0} {localStorage.getItem('timesPlayed') === '1' ? 'time' : 'times'} played</p>
    <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore)}>Reset Info</button>
  </>);
}

export default PlayerInfo;