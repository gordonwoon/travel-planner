import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography,
  Button,
  Box,
  MenuItem
} from '@material-ui/core';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import { useMutation } from '@apollo/react-hooks';
import ADD_PLACE from '../../mutations/add-place';
import FETCH_DESTINATION from '../../queries/fetch-destination';
import _ from 'lodash';
import request from '../../adapter/axios';
import { GoogleMap, GooglePhoto } from '../google';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  menu: {
    width: 200
  }
}));

const activityType = [
  {
    label: 'Accomodation',
    value: 'accomodation'
  },
  {
    label: 'Food',
    value: 'food'
  },
  {
    label: 'Sightseeing',
    value: 'sightseeing'
  },
  {
    label: 'Adventure',
    value: 'adventure'
  },
  {
    label: 'Tour',
    value: 'tour'
  }
];

const PlannerModal = ({ open, handleClose, id }) => {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [expense, setExpense] = React.useState('');
  const [type, setType] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [date, setDate] = React.useState([new Date(), new Date()]);
  const [loading, setLoading] = React.useState(false);
  const [place, setPlace] = React.useState({});
  const [addPlace] = useMutation(ADD_PLACE);
  const handleChange = e => {
    setName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addPlace({
      variables: {
        name: place.name,
        place_id: place.place_id,
        address: place.formatted_address,
        from_date: Math.round(date[0].getTime() / 1000),
        to_date: Math.round(date[1].getTime() / 1000),
        expense: parseFloat(expense),
        type,
        id
      },
      refetchQueries: [{ query: FETCH_DESTINATION, variables: { id } }]
    })
      .then(response => handleClose())
      .catch(error => alert(error));
  };
  const fetchPlaces = React.useCallback(
    _.debounce(name => {
      request({
        path: `/google/places?query=${name}`,
        success: places => {
          const selection = Array.isArray(places) ? places[0] : {};
          setAddress(selection.formatted_address);
          setPlace({
            ...selection,
            photo_reference: selection.photos[0].photo_reference
          });
          setLoading(false);
        },
        fail: () => {
          setLoading(false);
        }
      });
    }, 300),
    []
  );
  React.useEffect(() => {
    fetchPlaces(name);
    setLoading(true);
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography gutterBottom variant="h4" component="h4">
            Add place
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <DateTimeRangePicker value={date} onChange={setDate} />
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Box p={1} display="flex" flexDirection="column">
                <TextField
                  required
                  autoFocus
                  label="Name"
                  margin="normal"
                  value={name}
                  onChange={handleChange}
                />
                <TextField
                  label="Expense"
                  margin="normal"
                  value={expense}
                  onChange={e => setExpense(e.target.value)}
                />
                <TextField
                  select
                  label="Activity Type"
                  helperText="Please select activity type"
                  margin="normal"
                  value={type}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  onChange={e => setType(e.target.value)}
                >
                  {activityType.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  disabled
                  label="Address"
                  margin="normal"
                  value={address}
                  onChange={handleChange}
                />
                {!loading && (
                  <GooglePhoto
                    maxwidth={400}
                    maxheight={150}
                    photoreference={place.photo_reference}
                  />
                )}
              </Box>
              <Box p={1} display="flex" flexDirection="column">
                {!loading && place.geometry && (
                  <GoogleMap.Place
                    title={name}
                    width={400}
                    height={400}
                    queries={{
                      q: name,
                      center: `${place.geometry.location.lat}, ${place.geometry.location.lng}`
                    }}
                  />
                )}
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default PlannerModal;
