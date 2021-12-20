import { useEffect } from "react";
import { setInfo, resetInfo } from '../helpers/PlayInfo';
import medal from '../imgs/_128-medal.png'

function PlayInfo({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo}) {

  useEffect(() => { setInfo(playInfo, setPlayInfo) }, [playInfo])

  const bestScoreImg = <img type="button" src={medal} width="40" height="40" alt="Medal" title="Best Score"/>

  return (<>
    <h3>Best Score: {playInfo.bestScore}</h3>
    <h3>{bestScoreImg}</h3>
    <h3>Times Played: {playInfo.timesPlayed}</h3>
    <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset Info</button>
  </>);
}

export default PlayInfo;