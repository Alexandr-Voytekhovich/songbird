function setAnswerNumber (min, max) {
  const randomValue = Math.floor(Math.random() * (max - min) + min);
  return randomValue;
}

const initialState = {
  currentRound: 0,
  score: 0,
  attempts: 5,
  correctValue: setAnswerNumber (1, 7),
  currentItem: 42,
  answerStatus: false,
  endGameStatus: false,
  staticImage: true,
  loadingInQuestionBlock: false,
  loadingInInfoBlock: false,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'UP_LEVEL':
      return {
        ...state,
        currentRound: state.currentRound + 1
      }
    case 'RESET_LEVEL':
      return {
        ...state,
        currentRound: 0
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
    case 'RESET_SCORE':
      return {
        ...state,
        score: 0,
      }
    case 'UPDATE_DISPLAY_MODAL':
      return {
        ...state,
        endGameStatus: !state.endGameStatus,
      }
    case 'ADD_STATIC_IMAGE':
      return {
        ...state,
        staticImage: true,
      }
    case 'ADD_DYNAMIC_IMAGE':
      return {
        ...state,
        staticImage: false,
      }
    case 'ON_LOADING_IN_QUESTION_BLOCK':
      return {
        ...state,
        loadingInQuestionBlock: true,
      }
    case 'OFF_LOADING_IN_QUESTION_BLOCK':
      return {
        ...state,
        loadingInQuestionBlock: false,
      }
    case 'ON_LOADING_IN_INFO_BLOCK':
      return {
        ...state,
        loadingInInfoBlock: true,
      }
    case 'OFF_LOADING_IN_INFO_BLOCK':
      return {
        ...state,
        loadingInInfoBlock: false,
      }
      default: 
        return state;
  }

}

export default reducer;