import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Actions from '../../actions/actions.js';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    maxWidth: 1000,

  },
}));

/*
const RenderRow = (props:ListChildComponentProps) => {
  const { index, style } = props;

  console.log(props);
  const handleChange = (index) => {
    //setActiveIndex(index);

  };

  return (
    <ListItem button onClick={() => handleChange(index)} style={style} key={index} >
      <ListItemText primary={`Shift ${index}`} />
    </ListItem>
  );
}
*
/*
RenderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  //setActiveIndex: PropTypes.func.isRequired,

};
*/

export default function VirtualizedList(props) {
  const classes = useStyles();
  const {setActiveIndex} = props;
  const {} = ;
  //console.log(props.selectedDate);





  const RenderRow = (props:ListChildComponentProps) => {
    const { index, style } = props;


    const handleChange = (index) => {
      setActiveIndex(index);

    };

    return (
      <ListItem button onClick={() => handleChange(index)} style={style} key={index} >
        <ListItemText primary={`Shift ${index}`} />
      </ListItem>
    );
  }

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={400} itemSize={46} itemCount={100}>
        {RenderRow}
      </FixedSizeList>
    </div>
  );
}
