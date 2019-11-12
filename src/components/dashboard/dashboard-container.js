import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fab, Icon } from '@material-ui/core';
import { DashboardItem, DashboardModal } from './';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_DESTINATIONS = gql`
  {
    destinations {
      id
      name
    }
  }
`;

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

const DashboardContainer = props => {
  const classes = useStyles();
  const [state, setState] = React.useState(defaultState);
  const { loading, error, data } = useQuery(FETCH_DESTINATIONS);
  const handleOpen = () => {
    setState({ open: true })
  }
  const handleClose = () => {
    setState({ open: false })
  }
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
      <Grid className={classes.root} container spacing={2} >
        {data && data.destinations.map((item, key) => (
          <Grid item xs={12} md={6} key={key} >
            <DashboardItem
              primary={item.name}
            />
          </Grid>
        ))}
        <Fab color="secondary" className={classes.addButton} onClick={handleOpen}>
          <Icon>add</Icon>
        </Fab>
        <DashboardModal
          open={state.open}
          handleClose={handleClose}
        />
      </Grid>
  );
}

export default DashboardContainer;
