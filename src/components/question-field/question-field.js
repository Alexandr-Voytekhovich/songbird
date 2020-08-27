import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';


import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss'
import 'react-h5-audio-player/src/styles.scss';
import './question-field.scss';

import birdsData from '../../data/data'


class QuestionField extends Component {

  constructor() {
    super();
    this.link = 'https://raw.githubusercontent.com/Alexandr-Voytekhovich/songtime-data/master/'
    this.myRef = React.createRef();
    this.player = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.style.color = 'green'
  }

  componentDidUpdate(prevProps) {
    const { currentRound, correctValue, answerStatus } = this.props;
    if (prevProps.answerStatus !== answerStatus) {
      this.player.current.audio.current.src = this.link + birdsData[currentRound][correctValue - 1].audio
    }
  }

  addImageFromStatus() {
    const { staticImage } = this.props;
    return staticImage ? "assets/img/example-static.jpg" : "assets/img/example.gif";
  }

  render() {
    const { currentRound, correctValue, answerStatus, addStaticImage, addDynamicImage } = this.props
    
    return (
      <div className="question-field">
        <div className="question-field__img-block">
        <img src={ answerStatus ? this.link + birdsData[currentRound][correctValue - 1].image : this.addImageFromStatus() } alt="example"></img>
        </div>
        <div className="question-field__info-block">
          <h3 ref={this.myRef}>{answerStatus 
            ? `${ birdsData[currentRound][correctValue - 1].name } - ${birdsData[currentRound][correctValue - 1].species }` 
            : '*******'}</h3>
          <AudioPlayer
            ref={this.player}
            onPlay={ addDynamicImage }
            onPause={ addStaticImage }
            onAbort={ addStaticImage }
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={this.link + birdsData[currentRound][correctValue - 1].audio}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentRound, correctValue, answerStatus, staticImage }) => {
  return { currentRound, correctValue, answerStatus, staticImage }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addStaticImage: () => {
      dispatch({
        type: 'ADD_STATIC_IMAGE'
      })
    },
    addDynamicImage: () => {
      dispatch({
        type: 'ADD_DYNAMIC_IMAGE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionField);