import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import birdsData from '../../data/data';

import './info-field.scss';
import 'react-h5-audio-player/src/styles.scss';

class InfoField extends Component {
  constructor() {
    super();
    this.link = 'https://raw.githubusercontent.com/Alexandr-Voytekhovich/songtime-data/master/'
  }

  componentDidUpdate(prevProps) {
    const { currentRound, currentItem, answerStatus } = this.props;
    if (prevProps.answerStatus !== answerStatus && currentItem !== 42) {
      document.querySelector(".info-field__description-field audio").src = this.link + birdsData[currentRound][currentItem - 1].audio
    }
  }

  render () {
    const { 
      currentRound, currentItem,
      addDynamicImage, addStaticImage
      } = this.props;

    if (currentItem === 42) {
      return (
        <h2 className="info-field__title">Listen to the player, select an artist and a song from the list.</h2>
      )
    } else {
      return (
        <div className="info-field">
            <div className="info-field__description-field">
              <img src={this.link + birdsData[currentRound][currentItem - 1].image} alt="example"></img>
              <div className="description-field__info-block">
                <h3>{ birdsData[currentRound][currentItem - 1].name }</h3>
                <p onClick={this.props.currentRound131}>{ birdsData[currentRound][currentItem - 1].species }</p>
                <AudioPlayer
                  onPlay={ addDynamicImage }
                  onPause={ addStaticImage }
                  onAbort={ addStaticImage }
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  src={this.link + birdsData[currentRound][currentItem - 1].audio}
                />
              </div>
            </div>
            <p>{ birdsData[currentRound][currentItem - 1].description }</p>
        </div>
      )
    }

  }
}

const mapStateToProps = ({ currentItem, currentRound, answerStatus }) => {
  return { currentItem, currentRound, answerStatus }
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
    currentRound131: () => {
      console.log('work')
      dispatch({
        type: 'UP_LEVEL'
      })
    },
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