import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../../reducers/connect-components';

import Button from '@material-ui/core/Button';

const EndGameBlock = ({
  resetLevel, resetAnswerStatus, resetAttempts, resetScore, hideEndBlock, resetCurrentItem, score
}) => {

  const resetGame = () => {
    resetLevel();
    resetAnswerStatus();
    resetAttempts();
    resetScore();
    resetCurrentItem();
    hideEndBlock();
  }

  const updatePage = () => {
    window.location.reload();
  }

  if (score === 30) {
    return (
      <div className="end-game-block">
        <h2 className="end-game-block__text">You got the best score: { score }</h2>
        <img src="assets/img/congrats.jpg" alt="end"></img>
        <Button className="end-game-block__button" variant="contained" onClick={ updatePage }>I am the best!</Button>
      </div>
    )
  }

  return (
    <div className="end-game-block">
      <h2>Your score: { score }</h2>
      <h3>You didn't get the best result</h3>
      <img src="assets/img/wrong.jpg" alt="end"></img>
      <Button className="end-game-block__button" variant="contained" onClick={resetGame}>Try again</Button>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(EndGameBlock);