import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fab, Icon } from '@material-ui/core';
import { DestinationItem, DestinationModal } from '.';
import { useQuery } from '@apollo/react-hooks';
import FETCH_DESTINATIONS from '../../queries/fetch-destinations';
import PlaneLoader from '../loader/plane';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  addButton: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }
}));

const defaultState = {
  open: false
}

const DestinationContainer = props => {
  const classes = useStyles();
  const [state, setState] = React.useState(defaultState);
  const { loading, error, data } = useQuery(FETCH_DESTINATIONS);
  const handleOpen = () => {
    setState({ open: true })
  }
  const handleClose = () => {
    setState({ open: false })
  }
  if (loading) return <PlaneLoader />;
  if (error) return `Error! ${error.message}`;
  return (
      <Grid className={classes.root} container spacing={2} >
        {data.destinations && data.destinations.map((item, key) => (
          <Grid item xs={12} md={6} key={key} >
            <DestinationItem
              id={item.id}
              name={item.name}
              places={item.places}
            />
          </Grid>
        ))}
        <Fab color="secondary" className={classes.addButton} onClick={handleOpen}>
          <Icon>add</Icon>
        </Fab>
        <DestinationModal
          open={state.open}
          handleClose={handleClose}
        />
      </Grid>
  );
}

export default DestinationContainer;
