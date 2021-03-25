import React from 'react';
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="textSecondary" gutterBottom>
          Food Packaging (Type)
        </Typography>
        <Typography variant="h5" component="h2">
          Food Packaging
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          West Avenue Drive, 1931, 83283 London
        </Typography>
        <Typography variant="body2" component="p">
          Short Description of what Food Packaging is...packaging
          food for clients and or volunteers: Should be fun!
          But what do I know? I am just simply testing the functionality
          of this card here, and checking to see if the volunteer can understand
          this well.
          <br />
          {'10/25/2021 (10:00 AM - 11:00 AM)'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Coordinator: John Doe - JDoe@food.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
}
