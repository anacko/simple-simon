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
        <p>{visible}</p>
        <p>Press Start Game to begin</p>
        <p>Progress is stored locally. Press Reset Info to reset it.</p>
        <a href="https://www.flaticon.com/packs/audio-and-video-controls" title="Source">Icons</a>
      </div>
    </div>
  );
}

export default About;

