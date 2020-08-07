import React from 'react';
import { connect } from "react-redux";

import './header.scss'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'




const Header = ({ currentRound, score }) => {

  return (
    <header>
      <div className="header__score-block">
        <h1>S<FontAwesomeIcon icon={faHistory} />NG TIME</h1>
        <span>Score: { score }</span>
      </div>

      <Paper square className="header__question-number">
        <Tabs
          value={currentRound}
          variant="fullWidth"
          orientation="horizontal"
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Tab label="Павук_1" />
          <Tab label="Павук_2" />
          <Tab label="Павук_3" />
          <Tab label="Павук_4" />
          <Tab label="Павук_5" />
          <Tab label="Павук_6" />
        </Tabs>
      </Paper>
    </header>
  )
};

const mapStateToProps = ({ currentRound, score }) => {
  return { currentRound, score }
}

export default connect(mapStateToProps)(Header);