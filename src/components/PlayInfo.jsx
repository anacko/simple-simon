import { useEffect } from "react";
import { setInfo, resetInfo } from '../helpers/PlayInfo';
import medal from '../imgs/_128-medal.png';
import close from '../imgs/_128-cancel.png';
import './GameControls.scss';
import './About.scss'


function PlayInfo({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo,
  viewComponents, setViewComponents}) {

  useEffect(() => { setInfo(playInfo, setPlayInfo) }, [playInfo])

  const togglePlayInfo = () => {
    if (viewComponents.includes('PlayInfo')) {
      const newComponents = [];
      viewComponents.map(elem => elem !== 'PlayInfo' ? newComponents.push(elem) : null);
      setViewComponents([...newComponents]);
    } else {
      setViewComponents([...viewComponents, 'PlayInfo']);
    }
  };
  
  const bestScoreImg = <img type="button" src={medal} width="40" height="40" alt="Medal" title="Best Score"
    onClick={togglePlayInfo}/>

  const closeView = <img type="button" src={close} width="40" height="40" alt="Medal" title="Best Score"
  onClick={togglePlayInfo}/>

  return (<div className="buttons-container">
    <h3>{bestScoreImg}</h3>
    <h3>Best Score: {playInfo.bestScore}</h3>
    <div className={`about-section ${viewComponents.includes('PlayInfo')?'visible':'invisible'}`}>
      <span className="close-button">{closeView}</span>
      <p>Best Score: {playInfo.bestScore}</p>
      <p>Times Played: {playInfo.timesPlayed}</p>
      <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset Info</button>
    </div>
  </div>);
}

export default PlayInfo;