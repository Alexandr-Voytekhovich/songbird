import React, { Component } from 'react';
import { connect } from 'react-redux';

import './footer.scss'

import Button from '@material-ui/core/Button';

class Footer extends Component {

  playCongratsMusic = () => {
    if (this.props.score === 30) {
      document.querySelector('.audio__win').play()
      return;
    }
    document.querySelector('.audio__lose').play();
  }

  callOnClick = () => { 
    if (!this.props.answerStatus) return;
    if (this.props.currentRound === 5) {
      this.props.showModalWindow();
      this.playCongratsMusic();
      return
    };
    this.props.upRound();
    this.props.resetCurrentItem();
    this.props.resetAnswerNumber();
    this.props.resetAnswerStatus();
    this.props.resetAttempts();
  }

  render() {
    const { answerStatus, currentRound } = this.props;
    return (
      <footer>
        <Button className={answerStatus ? "activeStatus": null } variant="contained" onClick={this.callOnClick}>Next level</Button>
        <audio className="audio__correct" src="./assets/audio/pew.mp3"></audio>
        <audio className="audio__wrong" src="assets/audio/wrong.mp3"></audio>
        <audio className="audio__lose" src={ currentRound === 5 ? "assets/audio/end-lose.mp3" : "" }></audio>
        <audio className="audio__win" src={ currentRound === 5 ? "assets/audio/end-win.mp3" : "" }></audio>
      </footer>
    )
  }
}

const mapStateToProps = ({ currentRound, answerStatus, score }) => {
  return { currentRound, answerStatus, score }
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
    },
    showModalWindow: () => {
      dispatch({
        type: 'UPDATE_DISPLAY_MODAL'
      })
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(Footer);