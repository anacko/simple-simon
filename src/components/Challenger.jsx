import { useEffect, useState } from "react";
import { showSequence, userClick } from '../helpers/Challenger';
import './Challenger.scss'

const Challenger = function({ counter, setCounter, score, setScore, sequence, setSequence, 
  stage, setStage, sound, setPlayInfo, setIsRunning }) {

  const [active, setActive] = useState(['', '', '', ''])
  const [unclickable, setUnclickable] = useState('')

  useEffect(() => { 
    setSequence(prev => stage === 0 ? [] : [...prev, Math.floor(Math.random()*4)]) 
  }, [stage, setSequence])

  useEffect(() => { 
    showSequence(sequence, sound, setUnclickable, setActive)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence]) // sound is ommited on purpose, as mute/unmute would make the sequence run again due to component rerendering

  const handleClick = (event) => userClick(event, sequence, sound, counter, score, stage, 
    setCounter, setScore, setStage, setPlayInfo, setIsRunning)

  return (<div className="challenger-container">
    <table className="container">
      <tbody>
      <tr><td className="theMiddle">{stage ? score : ''}</td></tr>
      <tr>
        <td type="button" className={`button-b0 ${active[0]} ${unclickable}`} id="0" onClick={handleClick}/>
        <td type="button" className={`button-b1 ${active[1]} ${unclickable}`} id="1" onClick={handleClick}/>
      </tr>
      <tr>
        <td type="button" className={`button-b2 ${active[2]} ${unclickable}`} id="2" onClick={handleClick}/>
        <td type="button" className={`button-b3 ${active[3]} ${unclickable}`} id="3" onClick={handleClick}/>
      </tr>
      </tbody>
    </table>
  </div>)
};

export default Challenger;