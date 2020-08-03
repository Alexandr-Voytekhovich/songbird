import React from 'react';

import './answer-field.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const AnswerField = () => {
  return (
    <List component="nav" aria-label="mailbox folders" className="answer-field">
      <ListItem button>
        <ListItemText primary="Павук1" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Павук2" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Павук3" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Павук4" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Павук5" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Павук6" />
      </ListItem>
      <Divider light />
    </List>
  )
}

export default AnswerField;