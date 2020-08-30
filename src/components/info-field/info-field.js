import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import songsData from '../../data/data';

import 'react-h5-audio-player/src/styles.scss';

class InfoField extends Component {
  constructor() {
    super();
    this.link = 'https://raw.githubusercontent.com/Alexandr-Voytekhovich/songtime-data/master/';
    this.playerFromInfo = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { currentRound, currentItem, answerStatus } = this.props;
    if (prevProps.answerStatus !== answerStatus && currentItem !== 42) {
      this.playerFromInfo.current.src = this.link + songsData[currentRound][currentItem - 1].audio
    }
  }

  render () {
    const { 
      currentRound, currentItem, endGameStatus,
      addDynamicImage, addStaticImage
      } = this.props;
    if (currentItem === 42) {
      return <h2 className="info-field__title">^^ Listen to the player, select an artist and a song from the list ^^</h2>
    } else {
      return (
        <div className="info-field">
            <div className="info-field__description-field">

              <img src={this.link + songsData[currentRound][currentItem - 1].image} alt="example"></img>

              <div className="description-field__info-block">
                <span>{ songsData[currentRound][currentItem - 1].name }</span>
                <p> {"«" + songsData[currentRound][currentItem - 1].species + "»"}</p>
                <AudioPlayer
                  ref={this.playerFromInfo}
                  onPlay={ addDynamicImage }
                  onPause={ addStaticImage }
                  onAbort={ addStaticImage }
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  src={endGameStatus ? "" : this.link + songsData[currentRound][currentItem - 1].audio} />
              </div>

            </div>
            <p>{ songsData[currentRound][currentItem - 1].description }</p>
        </div>

      )
    }

  }
}

const mapStateToProps = ({ currentItem, currentRound, answerStatus, endGameStatus }) => {
  return { currentItem, currentRound, answerStatus, endGameStatus }
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoField);