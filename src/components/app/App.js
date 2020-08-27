import React, { Component } from 'react';
import { connect } from 'react-redux';

import Intro from '../intro';
import Header from '../header';
import QuestionField from '../question-field';
import AnswerField from '../answer-field';
import InfoField from '../info-field';
import Footer from '../footer';
import LoseModal from '../modal-windows'

import './common.scss'
import './constants.scss'
import './media.scss'
import './player.scss'

class App extends Component {

  render() {
    const { displayModal, currentRound, currentItem } = this.props;

    const gameOver = (displayModal && currentRound === 5)

    return (
    <>
    <Intro />
    
      <div className="songbird__main-container">
        <Header />
        { gameOver ? <LoseModal /> : null} 
        <div className= {gameOver ? "songbird__game-field_hide" : "songbird__game-field" }>
          <QuestionField />
          <div className={currentItem === 42 ? "songbird__fields-container_reverse" : "songbird__fields-container"}>
            <AnswerField />
            <InfoField />
          </div>
          <Footer />
        </div>
      </div>
    </>
    )
  }
}

function mapStateToProprs( { displayModal, currentRound, currentItem } ) {
  return { displayModal, currentRound, currentItem }
}

export default connect(mapStateToProprs)(App);