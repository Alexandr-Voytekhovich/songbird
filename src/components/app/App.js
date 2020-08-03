import React, { Component } from 'react';

import Header from '../header';
import QuestionField from '../question-field';
import AnswerField from '../answer-field';
import InfoField from '../info-field';
import Footer from '../footer';

import './common.scss'
import './constants.scss'
import './media.scss'

export default class App extends Component {

  render() {
    return (
      <div className="songbird__main-container">
      <Header />
      <QuestionField />
      <div className="songbird__fields-container">
        <AnswerField />
        <InfoField />
      </div>
      <Footer />
      </div>
    )
  }
}