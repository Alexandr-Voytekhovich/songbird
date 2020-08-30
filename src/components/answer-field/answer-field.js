import React, { Component } from 'react';
import { connect } from 'react-redux';
import songsData from '../../data/data';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class AnswerField extends Component {

  constructor() {
    super();
    this.listItems = [];
    this.correctAudioStatus = React.createRef();
    this.wrongAudioStatus = React.createRef();
  }

  promptCorrectAnswer = () => {
    const {currentRound, correctValue} = this.props;
    const artist = songsData[currentRound][correctValue - 1].name;
    const song = songsData[currentRound][correctValue - 1].species;
    console.log(`${artist} "${song}"`)
  }


  componentDidMount() {
    this.promptCorrectAnswer();
  }

  componentDidUpdate(prevProps) {
    const { currentRound } = this.props;

    if (prevProps.currentRound !== currentRound) {
      this.resetAnswerIndicators();
      this.promptCorrectAnswer();
    }
  }

  switchAnswerIndicator = (event, answerStatus) => {
    if(!event.target.dataset.answer) return;

    const currentElementNumber = event.target.dataset.answer - 1;
    const el = this.listItems[currentElementNumber];

    if (answerStatus) {
      el.style.backgroundColor = '#4caf50';
    } else {
      el.style.backgroundColor = '#ff5722d6';
      el.classList.add('wrong-answer')
    };
  }

  resetAnswerIndicators = () => {
    this.listItems.forEach((el) => {
      el.style.backgroundColor = '#868686c9';
      el.classList.remove('wrong-answer');
    })
  }

  playAnswerStatus = (status) => {
    return status 
      ? this.correctAudioStatus.current.play() 
      : this.wrongAudioStatus.current.play()
  }

  compareAnswers = (event) => {
    const { correctValue, answerStatus } = this.props;

    const currentElementNumber = event.target.dataset.answer - 1;
    const el = this.listItems[currentElementNumber];

    if (answerStatus) return;

    if (+event.target.dataset.answer === correctValue) {
      this.switchAnswerIndicator(event, true)
      this.props.updateScore();
      this.playAnswerStatus(true);
      this.props.changeAnswerStatus();
      return;
    }

    if (el.classList.contains ('wrong-answer')) return;

    this.switchAnswerIndicator(event, false)
    this.playAnswerStatus(false);
    this.props.reduceAttempts();
  }

  callOnClick = (event) => {
    this.compareAnswers(event);
    this.props.rewriteCurrentPosition(event);
  }

  render() {
    const { currentRound } = this.props;

    const elements = songsData[currentRound].map((el) => {
    const {id, name, species } = el;
      return (
        <ListItem button divider key={id} data-answer={id}>
          <div ref={listItem => this.listItems[id - 1] = listItem} className={'list__indicator indicator-' + id} data-answer={id}></div>
          <ListItemText 
            primary={name}
            secondary={species}
            secondaryTypographyProps={{"data-answer": `${id}`}}
            data-answer={id}  
            primaryTypographyProps={{"data-answer": `${id}`}} />
        </ListItem>
      )
    })

    return (
      <>
        <List component="nav" aria-label="mailbox folders" className="answer-field" onClick={this.callOnClick}>
          {elements}
        </List>
        <audio ref={this.correctAudioStatus} className="audio__correct" src="./assets/audio/pew.mp3"></audio>
        <audio ref={this.wrongAudioStatus} className="audio__wrong" src="assets/audio/wrong.mp3"></audio>
      </>
    )
  }

}

const mapStateToProps = ({ currentRound, correctValue, answerStatus }) => {
  return { currentRound, correctValue, answerStatus }
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
    upRound: () => {
      dispatch({
        type: 'UP_LEVEL'
      })
    },
    rewriteCurrentPosition: (event) => {
      if (!event.target.dataset.answer) return
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerField);