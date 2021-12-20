import info from '../imgs/_128-info.png'
import './About.scss'

function About({viewComponents, setViewComponents}) {

  const toggleAbout = () => {
    if (viewComponents.includes('About')) {
      const newComponents = [];
      viewComponents.map(elem => elem !== 'About' ? newComponents.push(elem) : null);
      setViewComponents([...newComponents]);
    } else {
      setViewComponents([...viewComponents, 'About']);
    }
  };

  return (
    <div className="About">
      <img src={info} width="40" height="40" alt="About" onClick={toggleAbout}/>
      <div className={`about-section ${viewComponents.includes('About')?'visible':'invisible'}`}>
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

export default About;

