import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  media: {
    height: '250px',
    width: '400px'
  },
  content: {
    width: '100%',
    textAlign: 'center'
  }
}));

const DashboardItem = ({ primary, secondary }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="Travel"
        image="https://via.placeholder.com/400x250"
        title="Travel"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5">
          {primary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {secondary}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardItem;