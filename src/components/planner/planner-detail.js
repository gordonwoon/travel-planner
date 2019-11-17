import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMap from '../google/map';

const useStyles = makeStyles(theme => ({
  container: {
    height: '300px'
  }
}));

const PlannerDetail = ({ name }) => {
  const classes = useStyles();
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
          <GoogleMap
            title={name}
            queries={{ q: name }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default PlannerDetail;
