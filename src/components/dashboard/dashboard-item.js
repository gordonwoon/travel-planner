import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    cursor: 'pointer'
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

const DashboardItem = ({ id, primary, secondary, history }) => {
  const classes = useStyles();
  const handleClick = () => {
    history.push(`/planner/${id}`)
  }

  return (
    <Card className={classes.card} onClick={handleClick}>
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

export default withRouter(DashboardItem);
