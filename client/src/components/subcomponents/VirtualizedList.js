import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {showDateShifts} from '../../actions/actions.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    maxWidth: 1000,
  },
  list: {
    overflowY: 'scroll',
    height: 300,
  },
}));

export default function VirtualizedList(props) {
  const classes = useStyles();
  const { setActiveItem } = props;
  const { selectedDate } = props;
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const stringDate = selectedDate.toString();
    showDateShifts(stringDate).then(result => {
      setListItems(result);
    });
   }, [selectedDate]);
  
  const handleChange = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={classes.root}>
      <List className={classes.list} >
        {listItems.map(item => (
            <ListItem button onClick={() => handleChange(item)} key={item.id} >
              {item.title} 
            </ListItem>
        ))}   
      </List>
    </div>
  );
}
