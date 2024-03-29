import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { Divider, Fab, Icon } from '@material-ui/core';
import FETCH_DESTINATION from '../../queries/fetch-destination';
import { PlacesDetail, PlacesList, PlacesModal } from '.'

const useStyles = makeStyles(theme => ({
  addButton: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }
}));

const defaultState = {
  open: false
}

const PlacesContainer = ({ match }) => {
  const classes = useStyles();
  const id = match.params.id;
  const [state, setState] = React.useState(defaultState);
  const { loading, error, data } = useQuery(FETCH_DESTINATION, {
    variables: { id }
  });
  const handleOpen = () => {
    setState({ open: true })
  }
  const handleClose = () => {
    setState({ open: false })
  }
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <PlacesDetail
        name={data.destination && data.destination.name}
        places={data.destination && data.destination.places}
      />
      <Divider />
      <PlacesList
        id={data.destination && data.destination.id}
        places={data.destination && data.destination.places}
      />
      <Fab color="secondary" className={classes.addButton} onClick={handleOpen}>
        <Icon>add</Icon>
      </Fab>
      <PlacesModal
        open={state.open}
        handleClose={handleClose}
        id={data.destination && data.destination.id}
      />
    </div>
  )
}

export default PlacesContainer;
