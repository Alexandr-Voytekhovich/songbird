import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {

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
      <h2>S<FontAwesomeIcon icon={faHistory} />NG TIME</h2>
      <p>Quiz with legendary music</p>
      <button type="button" className="btn" data-button="start" onClick={hideIntro}>Start</button>
  </div>
  )
}

export default Intro;
