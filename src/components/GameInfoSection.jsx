import close from '../imgs/_128-cancel.png';
import play from '../imgs/_128-play-button.png'
import stop from '../imgs/_128-stop.png'
import mute from '../imgs/_128-mute.png'
import unmute from '../imgs/_128-speaker.png'
import medal from '../imgs/_128-medal.png';
import info from '../imgs/_128-info.png'
import './InfoSection.scss'

function GameInfoSection({ viewComponents, setViewComponents }) {

  const startRound = <img type="button" src={play} width="20" height="20" alt="Play" title="Start Round" />
  const stopRound = <img type="button" src={stop} width="20" height="20" alt="Stop" title="Stop Round"/>
  const muteSound = <img type="button" src={mute} width="20" height="20" alt="Mute" title="Mute"/>
  const unmuteSound = <img type="button" src={unmute} width="20" height="20" alt="Unmute" title="Unmute"/>
  const showPlayInfo = <img type="button" src={medal} width="20" height="20" alt="Play Info" title="Play Info"/>
  const showGameInfo = <img type="button" src={info} width="20" height="20" alt="Game Info" title="Game Info"/>

  const closeView = <img type="button" className='close-button' src={close} width="20" height="20" alt="Medal" title="Best Score"
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
    <div className="info-controls">{closeView} Return to game.</div>
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

