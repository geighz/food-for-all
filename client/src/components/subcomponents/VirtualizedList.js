import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    maxWidth: 1000,

  },
}));


function RenderRow(props) {
  const { index, style } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (index) => {
  console.log(index);
  setActiveIndex(index);

  return(
    <div>{activeIndex}</div>
  );
  };

  return (
    <ListItem button onClick={() => handleChange(index)} style={style} key={index} >
      <ListItemText primary={`Shift ${index}`} />
    </ListItem>
  );
}

RenderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={400} itemSize={46} itemCount={200}>
        {RenderRow}
      </FixedSizeList>
    </div>
  );
}
