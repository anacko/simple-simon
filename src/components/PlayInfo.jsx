import { useEffect } from "react";
import { setInfo } from '../helpers/PlayInfo';
import medal from '../imgs/_128-medal.png';
import './GameControls.scss';
import './InfoSection.scss'


function PlayInfo({ playInfo, setPlayInfo, viewComponents, setViewComponents }) {

  useEffect(() => { setInfo(playInfo, setPlayInfo) }, [playInfo, setPlayInfo])

  const showPlayInfo = <img type="button" src={medal} width="40" height="40" alt="Play Info" title="Play Info"
    onClick={() => setViewComponents(viewComponents === 'Play Info' ? 'Challenger' : 'Play Info')}/>

  return (<div className="buttons-container">
    <h3>{showPlayInfo}</h3>
    <h3>Best Score: {playInfo.bestScore}</h3>
  </div>);
}

export default PlayInfo;