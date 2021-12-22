import { resetInfo } from '../helpers/PlayInfo';
import close from '../imgs/_128-cancel.png';
import './GameControls.scss';
import './InfoSection.scss'

function PlayInfoSection({setStage, setSequence, setCounter, setScore, playInfo, setPlayInfo,
  viewComponents, setViewComponents}) {
    
  const closeView = <img type="button" className="close-button" src={close} width="20" height="20" alt="Close" title="Close"
    onClick={() => setViewComponents(viewComponents === 'Play Info' ? 'Challenger' : 'Play Info')}/>

  return (<>
    <div className="info-section">
    {closeView}

    <h3>Play Information</h3>
    <table className='play-info-table'>
      <tbody>
        <tr><td>Times Played:</td><td className='play-info-table number'>{playInfo.timesPlayed}</td></tr>
        <tr><td>Longest Sequence:</td><td className='play-info-table number'>{playInfo.longestSequence}</td></tr>
        <tr><td>Best Score:</td><td className='play-info-table number'>{playInfo.bestScore}</td></tr>
      </tbody>
    </table>
    <p></p>
    <h3>Reset Information?</h3>
    <p>Progress is stored locally.<br/>Press Reset All to reset it.<br/>This action is irreversible!</p>
    <button onClick={() => resetInfo(setStage, setSequence, setCounter, setScore, setPlayInfo)}>Reset All</button>

    </div>
  </>);
}

export default PlayInfoSection;