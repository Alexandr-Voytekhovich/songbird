import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff78"
    }
  }
})

class Footer extends Component {

  constructor() {
    super();
    this.winAudioElement = React.createRef();
    this.loseAudioElement = React.createRef();
  }

  moveToUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  playCongratsMusic = () => {
    if (this.props.score === 30) {
      this.winAudioElement.current.play()
      return;
    }
    this.loseAudioElement.current.play();
  }

  callOnClick = () => { 
    if (!this.props.answerStatus) return;
    if (this.props.currentRound === 5) {
      this.props.showEndBlock();
      this.playCongratsMusic();
      return
    };
    this.props.upRound();
    this.props.resetCurrentItem();
    this.props.resetAnswerNumber();
    this.props.resetAnswerStatus();
    this.props.resetAttempts();
    this.moveToUpPage();
  }

  render() {
    const { answerStatus, currentRound } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <footer>
          <Button 
            color="secondary"
            variant="contained"
            className={answerStatus ? "activeStatus": null }
            onClick={this.callOnClick}>
            Next level
          </Button>
          <audio ref={this.loseAudioElement} className="audio__lose" src={ currentRound === 5 ? "assets/audio/end-lose.mp3" : "" }></audio>
          <audio ref={this.winAudioElement} className="audio__win" src={ currentRound === 5 ? "assets/audio/end-win.mp3" : "" }></audio>
        </footer>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = ({ currentRound, answerStatus, score }) => {
  return { currentRound, answerStatus, score }
}

const mapDispatchToProps = ( dispatch ) => {
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
    showEndBlock: () => {
      dispatch({
        type: 'UPDATE_DISPLAY_MODAL'
      })
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);