import React from 'react'

import './header.scss'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Header = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <div className="header__score-block">
        <h1>SongOFtime</h1>
        <span>Score: {Math.floor(Math.random()*10)}</span>
      </div>

      <Paper square className="header__question-number">
        <Tabs
          value={value}
          variant="fullWidth"
          orientation="horizontal"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Павук_1" />
          <Tab label="Павук_2" disabled />
          <Tab label="Павук_3" disabled />
          <Tab label="Павук_4" disabled />
          <Tab label="Павук_5" disabled />
          <Tab label="Павук_6" disabled />
        </Tabs>
      </Paper>
    </header>
  )
};

export default Header;