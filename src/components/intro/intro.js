import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

import '../app/constants.scss'
import './intro.scss'

const Intro = () => {

/* const [visibility, setVisibility] = useState(false) */

/* const hideIntro = ()  => {
  setVisibility(!visibility)
} */

const introBlock = useRef();

const addNullOpacity = () => {
  introBlock.current.classList.add('null__opacity')
}

const addNullDisplay = () => {
  introBlock.current.classList.add('null__display')
}

const hideIntro = () => {
  setTimeout(addNullOpacity, 0);
  setTimeout(addNullDisplay, 800);
}

  return (
    <div className="intro" ref={introBlock}>
      <h2>S<FontAwesomeIcon icon={faHistory} /> NG TIME</h2>
      <p>Guess music from different times</p>
      <button type="button" className="btn" data-button="start" onClick={hideIntro}>Start</button>
  </div>
  )
}

export default Intro;
