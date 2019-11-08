import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Typography } from '@material-ui/core';

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

const DashboardModal = ({ open, handleClose }) => {
  const classes = useStyles();
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
          <form noValidate autoComplete="off">
            <TextField
              required
              label="Country"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default DashboardModal;