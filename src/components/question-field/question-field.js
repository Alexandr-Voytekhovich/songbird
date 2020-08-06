import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

import './question-field.scss';
import 'react-h5-audio-player/src/styles.scss';

import birdsData from '../../data/data'


class QuestionField extends Component {
  render() {
    const { currentRound, correctValue, answerStatus } = this.props
    return (
      <div className="question-field">
        <img src={ answerStatus ? birdsData[currentRound][correctValue - 1].image : 'assets/img/example.png' } alt="example"></img>
        <div className="question-field__info-block">
          <h3>{answerStatus ? birdsData[currentRound][correctValue - 1].name : '*******'}</h3>
          <AudioPlayer
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={birdsData[currentRound][correctValue - 1].audio}
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