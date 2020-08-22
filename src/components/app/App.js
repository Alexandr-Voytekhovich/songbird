import React, { Component } from 'react';
import { connect } from 'react-redux';

import Intro from '../intro'
import Header from '../header';
import QuestionField from '../question-field';
import AnswerField from '../answer-field';
import InfoField from '../info-field';
import Footer from '../footer';
import LoseModal from '../modal-windows'

import './common.scss'
import './constants.scss'

class App extends Component {

  render() {

    const { displayModal, currentRound } = this.props;

    return (
    <>
    <Intro />
    { displayModal && currentRound === 5 ? <LoseModal /> : null} 

      <div className="songbird__main-container">
        <Header />
        <QuestionField />
        <div className="songbird__fields-container">
          <AnswerField />
          <InfoField />
        </div>
        <Footer />
      </div>
    </>
    )
  }
}

function mapStateToProprs( { displayModal, currentRound } ) {
  return { displayModal, currentRound }
}

export default connect(mapStateToProprs)(App);