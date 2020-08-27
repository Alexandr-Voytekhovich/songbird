import React from 'react';
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './header.scss'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

const Header = ({ currentRound, score }) => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#7cb342',
      },
      secondary: {
        main: '#2a9a2f',
      },
    },
  });

  return (
    <header>
      <div className="header__score-block">
        <h1>S<FontAwesomeIcon icon={faHistory} />NG TIME</h1>
        <span>SCORE: { score }</span>
      </div>
      <ThemeProvider theme={theme}>
        <Paper square className="header__question-number">
          <Tabs
            value={currentRound}
            orientation="horizontal"
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            aria-label="scrollable auto tabs example"
            scrollButtons="on"
          >
            <Tab className="bam13" label="1960s" />
            <Tab label="1970s" />
            <Tab label="1980s" />
            <Tab label="1990s" />
            <Tab label="2000s" />
            <Tab label="2010s" />
          </Tabs>
        </Paper>
      </ThemeProvider>
    </header>
  )
};

const mapStateToProps = ({ currentRound, score }) => {
  return { currentRound, score }
}

export default connect(mapStateToProps)(Header);