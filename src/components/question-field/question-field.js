import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './question-field.scss';
import 'react-h5-audio-player/src/styles.scss';


const QuestionField = () => {
  return (
    <div className="question-field">
      <img src="./assets/img/example.png" alt="example"></img>
      <div className="question-field__info-block">
        <h3>Павук обыкновенный</h3>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          onPlay={e => console.log("onPlay")}
        />
      </div>
    </div>
  )
}

export default QuestionField;