import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import birdsData from '../../data/data';

import './info-field.scss';
import 'react-h5-audio-player/src/styles.scss';

class InfoField extends Component {

  render () {
    const { currentRound, currentItem } = this.props;

    if (currentItem === 13) {
      return 'Послушайте плеер. Выберите паука из списка'
    } else {
      return (
        <div className="info-field">
          <div className="info-field__description-field">
            <img src={birdsData[currentRound][currentItem - 1].image} alt="example"></img>
            <div className="description-field__info-block">
              <h3>{ birdsData[currentRound][currentItem - 1].name }</h3>
              <p onClick={this.props.currentRound131}>{ birdsData[currentRound][currentItem - 1].species }</p>
              <AudioPlayer
                autoPlay={false}
                autoPlayAfterSrcChange={false}
                src={ birdsData[currentRound][currentItem - 1].audio }
              />
            </div>
          </div>
          <p>{ birdsData[currentRound][currentItem - 1].description }</p>
        </div>
      )
    }

  }
}

const mapStateToProps = ({ currentItem, currentRound }) => {
  return { currentItem, currentRound }
}

const mapDispathToProps = ( dispatch ) => {
  return { 
    currentRound131: () => {
      console.log('work')
      dispatch({
        type: 'UP_LEVEL'
      })
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(InfoField);