import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../reducers/connect-components';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import Spinner from '../spinner';

import songsData from '../../data/data';

class QuestionField extends Component {

  constructor() {
    super();
    this.link = 'https://raw.githubusercontent.com/Alexandr-Voytekhovich/songtime-data/master/'
    this.player = React.createRef()
  }

  componentDidUpdate(prevProps) {
    const { currentRound, correctValue, answerStatus } = this.props;
    if (prevProps.answerStatus !== answerStatus) {
      this.player.current.audio.current.src = this.link + songsData[currentRound][correctValue - 1].audio
    }
  }

  addImageFromStatus() {
    const { staticImage } = this.props;
    return staticImage ? "assets/img/example-static.jpg" : "assets/img/example.gif";
  }

  aterLoadingImage = () => {
    this.props.showImageInQuestionBlock();
  }

  render() {
    const { currentRound, correctValue, answerStatus, addStaticImage, 
      addDynamicImage, endGameStatus, loadingInQuestionBlock } = this.props
    
    return (
      <div className="question-field">

        <div className="question-field__img-block">

        { loadingInQuestionBlock 
          ? <Spinner /> 
          : null }

        <img 
          className={loadingInQuestionBlock ? "hide-loading-block" : "" } 
          src={ answerStatus 
            ? this.link + songsData[currentRound][correctValue - 1].image 
            : this.addImageFromStatus() } 
            alt="example" 
            onLoad={ this.aterLoadingImage }>
        </img>
        </div>

        <div className="question-field__info-block">
          <h3 >
            {answerStatus 
              ? `${ songsData[currentRound][correctValue - 1].name } - ${songsData[currentRound][correctValue - 1].species }` 
              : '*******' }
          </h3>
          <AudioPlayer
            ref={this.player}
            onPlay={ addDynamicImage }
            onPause={ addStaticImage }
            onAbort={ addStaticImage }
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={ endGameStatus ? "" : this.link + songsData[currentRound][correctValue - 1].audio } />
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionField);