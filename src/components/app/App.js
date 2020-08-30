import React, { Component } from 'react';
import { connect } from 'react-redux';

import Intro from '../intro';
import Header from '../header';
import QuestionField from '../question-field';
import AnswerField from '../answer-field';
import InfoField from '../info-field';
import Footer from '../footer';
import EndGameBlock from '../end-game-screen'

class App extends Component {

  render() {
    const { endGameStatus, currentRound, currentItem } = this.props;

    const gameOver = (endGameStatus && currentRound === 5)

    return (
      <>
        <Intro />
        <div className="songbird__main-container">
          <Header />

          <div className= {gameOver ? "songbird__game-field_hide" : "songbird__game-field" }>
            <QuestionField />

            <div className={currentItem === 42 ? "songbird__fields-container_reverse" : "songbird__fields-container"}>
              <AnswerField />
              <InfoField />
            </div>

            <Footer />
          </div>

          { gameOver ? <EndGameBlock /> : null} 
        </div>
      </>
    )
  }
}

function mapStateToProprs({ endGameStatus, currentRound, currentItem }) {
  return { endGameStatus, currentRound, currentItem }
}

export default connect(mapStateToProprs)(App);