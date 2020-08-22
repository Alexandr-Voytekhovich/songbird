import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

import './question-field.scss';
import 'react-h5-audio-player/src/styles.scss';

import birdsData from '../../data/data'


class QuestionField extends Component {

  constructor() {
    super();
    this.link = 'https://raw.githubusercontent.com/Alexandr-Voytekhovich/songtime-data/master/'
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.style.color = 'green'
  }

  componentDidUpdate(prevProps) {
    const { currentRound, correctValue, answerStatus } = this.props;
    if (prevProps.answerStatus !== answerStatus) {
      document.querySelector("#root > div > div.question-field > div > div > audio").src = this.link + birdsData[currentRound][correctValue - 1].audio
    }
  }

  render() {
    const { currentRound, correctValue, answerStatus } = this.props
    
    return (
      <div className="question-field">
        <img src={ answerStatus ? this.link + birdsData[currentRound][correctValue - 1].image : 'assets/img/example.gif' } alt="example"></img> 
        <div className="question-field__info-block">
          <h3 ref={this.myRef}>{answerStatus ? birdsData[currentRound][correctValue - 1].name : '*******'}</h3>
          <AudioPlayer
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={this.link + birdsData[currentRound][correctValue - 1].audio}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentRound, correctValue, answerStatus }) => {
  return { currentRound, correctValue, answerStatus }
}

export default connect(mapStateToProps)(QuestionField);