import close from '../imgs/_128-cancel.png';
import './InfoSection.scss'

function GameInfoSection({ viewComponents, setViewComponents }) {

  const closeView = <img type="button" src={close} width="40" height="40" alt="Medal" title="Best Score"
    onClick={() => setViewComponents(viewComponents === 'Game Info' ? 'Challenger' : 'Game Info')}/>

  return (
    <div className="About">
      {closeView}
      <div className="info-section">
        <h3>Instructions</h3>
        <p>Press Start Game to begin. Once the sequence is presented, press the colors in the same order to go to next stage.</p>
        <p>Progress is stored locally. Press Reset Info to reset it.</p>
        <h3>About the Game</h3>
        <p>Simple Simon is a simple version of <a href="https://en.wikipedia.org/wiki/Simon_(game)">Simon</a> Game.</p>
        <p>More information: <a href="https://github.com/anacko/simple-simon#readme">here</a>!</p>
        </div>
    </div>
  );
}

export default GameInfoSection;

