import { resetInfo } from '../helpers/PlayInfo';
import close from '../imgs/_128-cancel.png';
import './GameControls.scss';
import './InfoSection.scss'

function PlayInfoSection({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo,
  viewComponents, setViewComponents}) {
    
  const closeView = <img type="button" src={close} width="40" height="40" alt="Medal" title="Best Score"
    onClick={() => setViewComponents(viewComponents === 'Play Info' ? 'Challenger' : 'Play Info')}/>

  return (<>
    <div className="info-section">
      <span className="close-button">{closeView}</span>
      <p>Best Score: {playInfo.bestScore}</p>
      <p>Times Played: {playInfo.timesPlayed}</p>
      <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset Info</button>
    </div>
  </>);
}

export default PlayInfoSection;