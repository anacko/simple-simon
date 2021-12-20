import { useEffect } from "react";
import { setInfo, resetInfo } from '../helpers/PlayInfo';
import medal from '../imgs/_128-medal.png';
import './GameControls.scss';
import './About.scss'


function PlayInfo({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo,
  viewGameStats, setViewGameStats}) {

  useEffect(() => { setInfo(playInfo, setPlayInfo) }, [playInfo])

  //const togglePlayInfo = () => viewGameStats === 'visible' ? setViewGameStats('invisible') : setViewGameStats('visible')
  const togglePlayInfo = () => setViewGameStats(viewGameStats === 'visible' ? 'invisible' : 'visible');
  
  const bestScoreImg = <img type="button" src={medal} width="40" height="40" alt="Medal" title="Best Score"
    onClick={togglePlayInfo}/>

  return (<div className="buttons-container">
    <h3>Best Score: {playInfo.bestScore}</h3>
    <h3>{bestScoreImg}</h3>
    <div className={`about-section ${viewGameStats}`}>
      <h3>{bestScoreImg}</h3>
      <p>Best Score: {playInfo.bestScore}</p>
      <p>Times Played: {playInfo.timesPlayed}</p>
      <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset Info</button>
    </div>
  </div>);
}

export default PlayInfo;