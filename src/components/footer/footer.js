import React, { Component } from 'react';
import { connect } from 'react-redux';

import './footer.scss'

import Button from '@material-ui/core/Button';

class Footer extends Component {

  render() {
    return (
      <footer>
        <Button variant="contained" onClick={this.props.upRound}>Next level</Button>
        <audio className="audio__correct" src="./assets/audio/pew.mp3"></audio>
        <audio className="audio__wrong" src="assets/audio/wrong.mp3"></audio>
      </footer>
    )
  }
}

const mapStateToProps = ({ currentRound13 }) => {
  return { currentRound13 }
}

const mapDispathToProps = ( dispatch ) => {
  return { 
    upRound: () => {
      dispatch({
        type: 'UP_LEVEL'
      })
    }
   }
}

export default connect(mapStateToProps, mapDispathToProps)(Footer);