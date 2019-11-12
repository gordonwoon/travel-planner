import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Typography, Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import ADD_DESTINATION from '../../mutations/add-destination';
import FETCH_DESTINATIONS from '../../queries/fetch-destinations';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '250px'
  },
  textField: {
    width: '100%'
  }
}));

const defaultState = {
  name: ''
}

const DashboardModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [state, setState] = React.useState(defaultState);
  const [addDestination, { data }] = useMutation(ADD_DESTINATION);
  const handleChange = e => {
    setState({ name: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault();
    addDestination({
      variables: { name: state.name },
      refetchQueries: [{ query: FETCH_DESTINATIONS }]
    })
    .then(response => handleClose())
    .catch(error => alert(error));
  }
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography gutterBottom variant="h4" component="h4">
            Where do you want to go?
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              required
              autoFocus
              label="Country"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={state.name}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Submit
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default DashboardModal;
