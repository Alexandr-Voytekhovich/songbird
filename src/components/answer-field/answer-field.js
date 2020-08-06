import React, { Component } from 'react';
import { connect } from 'react-redux';
import birdsData from '../../data/data';

import './answer-field.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { playCorrectAnswerAudio, playWrongAnswerAudio } from '../../utilities/utilities'

class AnswerField extends Component {

  compareAnswers = (event) => {
    const { correctValue } = this.props;
    if (+event.target.dataset.answer === correctValue) {
      playCorrectAnswerAudio();
      this.props.changeAnswerStatus();
    } else {
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
          <ListItemText 
            primary={name} 
            data-answer={id}  
            primaryTypographyProps={{'data-answer': `${id}`}} />
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

const mapStateToProps = ({ currentRound, correctValue }) => {
  return { currentRound, correctValue }
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
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(AnswerField);