import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleMap } from '../google';

const useStyles = makeStyles(theme => ({
  container: {
    height: '300px'
  }
}));

const PlannerDetail = ({ name, places }) => {
  const classes = useStyles();
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
    <div className={classes.container}>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h5" component="h5">{name}</Typography>
        </Box>
        <Box>
          {renderMap()}
        </Box>
      </Box>
    </div>
  );
}

export default PlannerDetail;
