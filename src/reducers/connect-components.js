const mapStateToProps = ({ 
  currentRound, currentItem, correctValue, answerStatus,
  endGameStatus, loadingInInfoBlock, loadingInQuestionBlock, staticImage,
  score
}) => {
  return { 
    currentRound, currentItem, correctValue, answerStatus,
    endGameStatus, loadingInInfoBlock, loadingInQuestionBlock, staticImage,
    score
  }
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
    },
    startLoadingInQuestionBlock: () => {
      dispatch({
        type: 'ON_LOADING_IN_QUESTION_BLOCK',
      })
    },
    startLoadingInInfoBlock: () => {
      dispatch({
        type: 'ON_LOADING_IN_INFO_BLOCK',
      })
    },
    resetLevel: () => {
      dispatch({
        type: 'RESET_LEVEL'
      })
    },
    resetAnswerStatus: () => {
      dispatch({
        type: 'RESET_ANSWER_STATUS'
      })
    },
    resetAttempts: () => {
      dispatch({
        type: 'RESET_ATTEMPTS'
      })
    },
    resetScore: () => {
      dispatch({
        type: 'RESET_SCORE'
      })
    },
    hideEndBlock: () => {
      dispatch({
        type: 'UPDATE_DISPLAY_MODAL'
      })
    },
    resetCurrentItem: () => {
      dispatch({
        type: 'RESET_CURRENT_ITEM'
      })
    },
    resetAnswerNumber: () => {
      dispatch({
        type: 'RESET_CORRECT_ANSWER_NUMBER'
      })
    },
    showEndBlock: () => {
      dispatch({
        type: 'UPDATE_DISPLAY_MODAL'
      })
    },
    addStaticImage: () => {
      dispatch({
        type: 'ADD_STATIC_IMAGE'
      })
    },
    addDynamicImage: () => {
      dispatch({
        type: 'ADD_DYNAMIC_IMAGE'
      })
    },
    showImageInInfoBlock: () => {
      dispatch({
        type: 'OFF_LOADING_IN_INFO_BLOCK'
      })
    },
    showImageInQuestionBlock: () => {
      dispatch({
        type: 'OFF_LOADING_IN_QUESTION_BLOCK'
      })
    },
  }
}

export { mapStateToProps, mapDispatchToProps };