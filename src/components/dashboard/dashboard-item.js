import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  }
}));

const DashboardItem = ({ primary, secondary }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Travel"
        height="250"
        image="https://via.placeholder.com/400x250"
        title="Travel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
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