import { useState } from 'react';
import info from '../imgs/_128-info.png'
import './About.scss'

function About() {

  const [visible, setVisible] = useState('invisible')
  const toggleAbout = () => visible === 'visible' ? setVisible('invisible') : setVisible('visible')

  return (
    <div className="App">
      <img src={info} width="40" height="40" alt="About" onClick={toggleAbout}/>
      <div className={`about-section ${visible}`}>
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

