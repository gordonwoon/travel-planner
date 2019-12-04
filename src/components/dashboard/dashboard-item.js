import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { GoogleMap } from '../google';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    textAlign: 'center'
  }
}));

const DashboardItem = ({ id, name, content, history, places }) => {
  const classes = useStyles();
  const handleClick = () => {
    history.push(`/planner/${id}`)
  }
  const renderMap = () => {
    if (places.length) {
      const origin = places[0].name
      const waypoints = places.length > 2 ? places.slice(1, -1).reduce((acc, place) => `${acc}|${place.place_id || place.address || place.name}`) : [];
      const destination = places[places.length-1].name;
      return (
        <GoogleMap.Directions
          title={name}
          queries={{ origin, waypoints, destination }}
        />
      )
    } else {
      return (
        <GoogleMap.Place
          title={name}
          queries={{ q: name }}
        />
      )
    }
  }

  return (
    <Card className={classes.card} onClick={handleClick}>
      {renderMap()}
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withRouter(DashboardItem);
