import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    color: 'white'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography gutterBottom variant="h3" component="h3">
        Begin your journey
      </Typography>
    </div>
  )
}

export default Home
