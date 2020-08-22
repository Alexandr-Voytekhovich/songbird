import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import './modal-windows.scss'

const LoseModal = ({
  resetLevel, resetAnswerStatus, resetAttempts, resetScore, updateDisplayModal,
  currentRound, score
  }) => {
    
  const resetGame = () => {
    resetLevel();
    resetAnswerStatus();
    resetAttempts();
    resetScore();
    updateDisplayModal();
  }

  const updatePage = () => {
    window.location.reload();
  }

  if (score === 30) {
    return (
      <div>
        <div className="modal__background"></div>
        <div className="modal__window">
          <h2 className="modal__text">You got the best score: { score }</h2>
          <h3 className="modal__text">Congratulation!</h3>
          <img src="assets/img/congrats.jpg" alt="end"></img>
          <Button className="modal__button" variant="contained" onClick={ updatePage }>I am the best!</Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="modal__background"></div>
      <div className="modal__window">
        <h2>Your score: { score }</h2>
        <h3>You didn't get the best result</h3>
        <img src="assets/img/wrong.jpg" alt="end"></img>
        <Button className="modal__button" variant="contained" onClick={resetGame}>Try again</Button>
      </div>
    </div>
  )

};

const mapStateToProps = ({ currentRound, score }) => {
  return { currentRound, score }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    resetLevel: () => {
      dispatch({
        type: 'RESET_LEVEL'
      })
    },
    resetAnswerStatus: () => {
      dispatch({
        type: 'RESET_ANSWER_STATUS'
      })
    },
    resetAttempts: () => {
      dispatch({
        type: 'RESET_ATTEMPTS'
      })
    },
    resetScore: () => {
      dispatch({
        type: 'RESET_SCORE'
      })
    },
    updateDisplayModal: () => {
      dispatch({
        type: 'UPDATE_DISPLAY_MODAL'
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoseModal);