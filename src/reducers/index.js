import { setAnswerNumber } from '../utilities/utilities'

const initialState = {
  currentRound: 0,
  correctValue: setAnswerNumber (1, 7),
  currentItem: 13,
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
    case 'CHANGE_ANSWER_STATUS':
      return {
        ...state,
        answerStatus: !state.answerStatus,
      }
      default: 
        return state;
  }

}

export default reducer;