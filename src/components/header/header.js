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
          orientation="horizontal"
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="scrollable auto tabs example"
          scrollButtons="on"
        >
          <Tab label="60-e" />
          <Tab label="70-e" />
          <Tab label="80-e" />
          <Tab label="90-e" />
          <Tab label="00-e" />
          <Tab label="10-e" />
        </Tabs>
      </Paper>
    </header>
  )
};

const mapStateToProps = ({ currentRound, score }) => {
  return { currentRound, score }
}

export default connect(mapStateToProps)(Header);