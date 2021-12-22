import close from '../imgs/_128-cancel.png';
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'
import mute from '../imgs/_128-mute.png'
import unmute from '../imgs/_128-speaker.png'
import medal from '../imgs/_128-medal.png';
import info from '../imgs/_128-info.png'
import './InfoSection.scss'

function GameInfoSection({ viewComponents, setViewComponents }) {

  const startRound = <img src={play} width="20" height="20" alt="Play"/>
  const stopRound = <img src={stop} width="20" height="20" alt="Stop"/>
  const muteSound = <img src={mute} width="20" height="20" alt="Mute"/>
  const unmuteSound = <img src={unmute} width="20" height="20" alt="Unmute"/>
  const showPlayInfo = <img src={medal} width="20" height="20" alt="Play Info"/>
  const showGameInfo = <img src={info} width="20" height="20" alt="Game Info"/>
  const closeViewImg = <img src={close} width="20" height="20" alt="Close"/>

  const closeView = <img type="button" className='close-button' src={close} width="20" height="20" alt="Close" title="Close"
    onClick={() => setViewComponents(viewComponents === 'Game Info' ? 'Challenger' : 'Game Info')}/>

  return (<div className="info-section">
    {closeView}

    <h3>Game Controls</h3>
    <article>
    <div className="info-controls">{startRound} Start Game. Begins a new round.</div>
    <div className="info-controls">{stopRound} Stop Game. Finalizes current round.</div>
    <div className="info-controls">{muteSound} Mute sound.</div>
    <div className="info-controls">{unmuteSound} Unmute sound.</div>
    <div className="info-controls">{showPlayInfo} Show play information.</div>
    <div className="info-controls">{showGameInfo} Show game information.</div>
    <div className="info-controls">{closeViewImg} Return to game.</div>
    </article>

    <h3>Instructions</h3>
    <article>
    <p>Press Start Game to begin.</p>
    <p>Once the sequence is presented, press the colors in the same order to go to next stage.</p>
    </article>

    <h3>About the Game</h3>
    <article>
    <p>Simple Simon is a simple version of <a href="https://en.wikipedia.org/wiki/Simon_(game)">Simon</a> Game.</p>
    <p>More information: <a href="https://github.com/anacko/simple-simon#readme">here</a>!</p>
    </article>
      
  </div>);
}

export default GameInfoSection;

