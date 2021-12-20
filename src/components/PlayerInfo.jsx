import { useEffect, useState } from "react";
import { getInfo, setInfo, resetInfo } from '../helpers/PlayerInfo';
import './Challenger.scss'

function PlayerInfo({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo}) {

  useEffect(() => { setInfo(playInfo, setPlayInfo) }, [playInfo])

  return (<>
    <p>Best Score: {playInfo.bestScore}</p>
    <p>Times Played: {playInfo.timesPlayed}</p>
    <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset Info</button> 
    <button onClick={() => setInfo({ bestScore: 88, timesPlayed: 10 }, setPlayInfo)}>Set Info</button> 
  </>);
}

export default PlayerInfo;