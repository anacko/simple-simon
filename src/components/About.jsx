import info from '../imgs/_128-info.png'
import './About.scss'

function About({viewAbout, setViewAbout}) {

  const toggleAbout = () => viewAbout === 'visible' ? setViewAbout('invisible') : setViewAbout('visible')

  return (
    <div className="About">
      <img src={info} width="40" height="40" alt="About" onClick={toggleAbout}/>
      <div className={`about-section ${viewAbout}`}>
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

