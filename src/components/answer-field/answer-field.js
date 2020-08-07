import React, { Component } from 'react';
import { connect } from 'react-redux';
import birdsData from '../../data/data';

import './answer-field.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { playCorrectAnswerAudio, playWrongAnswerAudio } from '../../utilities/utilities'

class AnswerField extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.currentRound !== this.props.currentRound) {
      this.resetAnswerIndicators()
    }
  }

  // rhap_play-pause-button

  switchAnswerIndicator = (event, answerStatus) => {
    const currentElementNumber = event.target.dataset.answer;
    const el = document.querySelector(`.indicator-${currentElementNumber}`);
    if (answerStatus) {
      el.style.backgroundColor = '#4caf50';
    } else {
      el.style.backgroundColor = '#ff5722';
    };
  }

  resetAnswerIndicators = () => {
    document.querySelectorAll('.list__indicator').forEach((el) => {
      el.style.backgroundColor = '#868686c9';
    })
  }

  compareAnswers = (event) => {
    const { correctValue, answerStatus } = this.props;
    if (answerStatus) return;


    if (+event.target.dataset.answer === correctValue) {
      this.switchAnswerIndicator(event, true)
      this.props.updateScore();
      playCorrectAnswerAudio();
      this.props.changeAnswerStatus();
    } else {
      this.switchAnswerIndicator(event, false)
      this.props.reduceAttempts();
      playWrongAnswerAudio();
    }
  }

  callOnClick = (event) => { 
    this.compareAnswers(event);
    this.props.rewriteCurrentPosition(event);
  }


  render() {
    const { currentRound } = this.props;

    const elements = birdsData[currentRound].map((el) => {
      const {id, name } = el;
      return (
        <ListItem button divider key={id} data-answer={id}>
          <div className={'list__indicator indicator-' + id} data-answer={id}></div>
          <ListItemText 
            primary={name} 
            data-answer={id}  
            primaryTypographyProps={{"data-answer": `${id}`}} />
        </ListItem>
      )
    })

    return (
      <List component="nav" aria-label="mailbox folders" className="answer-field" onClick={this.callOnClick}>
        {elements}
      </List>
    )
  }

}

const mapStateToProps = ({ currentRound, correctValue, answerStatus }) => {
  return { currentRound, correctValue, answerStatus }
}

const mapDispathToProps = ( dispatch ) => {
  return { 
    upRound: () => {
      dispatch({
        type: 'UP_LEVEL'
      })
    },
    rewriteCurrentPosition: (event) => {
      const positionFromClick = +event.target.dataset.answer;
      dispatch({
        type: 'CHANGE_CURRENT_ITEM',
        positionFromClick
      })
    },
    changeAnswerStatus: () => {
      dispatch({
        type: 'CHANGE_ANSWER_STATUS',
      })
    },
    reduceAttempts: () => {
      dispatch({
        type: 'REDUCE_ATTEMPTS',
      })
    },
    updateScore: () => {
      dispatch({
        type: 'UPDATE_SCORE',
      })
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(AnswerField);