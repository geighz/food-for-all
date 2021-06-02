import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { shift } = props;
  const [card, setCard] = useState({});

  useEffect(() => {
    setCard(shift);
  }, [shift]);

  console.log(card.title);
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="textSecondary" gutterBottom>
        {card.type}
        </Typography>
        <Typography variant="h5" component="h2">
          {card.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {card.location}
        </Typography>
        <Typography variant="body2" component="p">
          {card.summary}
          <br />
          Start: {card.time_start}
          <br />
          End: {card.time_end}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Coordinator: {card.admin}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
}
