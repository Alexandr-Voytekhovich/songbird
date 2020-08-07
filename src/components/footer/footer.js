import React, { Component } from 'react';
import { connect } from 'react-redux';

import './footer.scss'

import Button from '@material-ui/core/Button';

class Footer extends Component {


  callOnClick = () => { 
    this.props.upRound();
    this.props.resetCurrentItem();
    this.props.resetAnswerNumber();
    this.props.resetAnswerStatus();
    this.props.resetAttempts();
  }

  render() {
    return (
      <footer>
        <Button variant="contained" onClick={this.callOnClick}>Next level</Button>
        <audio className="audio__correct" src="./assets/audio/pew.mp3"></audio>
        <audio className="audio__wrong" src="assets/audio/wrong.mp3"></audio>
      </footer>
    )
  }
}

const mapStateToProps = ({ currentRound }) => {
  return { currentRound }
}

const mapDispathToProps = ( dispatch ) => {
  return { 
    upRound: () => {
      dispatch({
        type: 'UP_LEVEL'
      })
    },
    resetCurrentItem: () => {
      dispatch({
        type: 'RESET_CURRENT_ITEM'
      })
    },
    resetAttempts: () => {
      dispatch({
        type: 'RESET_ATTEMPTS'
      })
    },
    resetAnswerStatus: () => {
      dispatch({
        type: 'RESET_ANSWER_STATUS'
      })
    },
    resetAnswerNumber: () => {
      dispatch({
        type: 'RESET_CORRECT_ANSWER_NUMBER'
      })
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(Footer);