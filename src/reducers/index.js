import { setAnswerNumber } from '../utilities/utilities'

const initialState = {
  currentRound: 0,
  score: 0,
  attempts: 5,
  correctValue: setAnswerNumber (1, 7),
  currentItem: 42,
  answerStatus: false,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'UP_LEVEL':
      return {
        ...state,
        currentRound: state.currentRound + 1
      }
    case 'CHANGE_CURRENT_ITEM':
      return {
        ...state,
        currentItem: action.positionFromClick
      }
    case 'RESET_CURRENT_ITEM':
      return {
        ...state,
        currentItem: 42
      }
    case 'CHANGE_ANSWER_STATUS':
      return {
        ...state,
        answerStatus: true,
      }
    case 'RESET_ANSWER_STATUS':
      return {
        ...state,
        answerStatus: false,
      }
    case 'REDUCE_ATTEMPTS':
      return {
        ...state,
        attempts: state.attempts - 1,
      }
    case 'RESET_ATTEMPTS':
      return {
        ...state,
        attempts: 5,
      }
    case 'RESET_CORRECT_ANSWER_NUMBER':
      return {
        ...state,
        correctValue: setAnswerNumber (1, 7),
      }
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: state.score + state.attempts,
      }
      default: 
        return state;
  }

}

export default reducer;