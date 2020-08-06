function setAnswerNumber (min, max) {
  const randomValue = Math.floor(Math.random() * (max - min) + min);
  console.log(randomValue)
  return randomValue;
}

function playCorrectAnswerAudio() {
  document.querySelector('.audio__correct').play()
}

function playWrongAnswerAudio() {
  document.querySelector('.audio__wrong').play()
}

export { 
  playCorrectAnswerAudio, playWrongAnswerAudio,
  setAnswerNumber,
 };