import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Typography } from '@material-ui/core';
import FETCH_DESTINATION from '../../queries/fetch-destination';
import keys from '../../config/keys';
import googleMaps from '@google/maps';


const PlannerContainer = ({ match }) => {
  const id = match.params.id;
  const { loading, error, data } = useQuery(FETCH_DESTINATION, {
    variables: { id }
  });
  const googleMapsClient = googleMaps.createClient({
    key: keys.googleAPIKey
  })
  const fetchPlace = async () => {
    googleMapsClient.places({
      query: data.destination && data.destination.name
    }, (err, res) => console.log(res));
  }
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  fetchPlace();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h5" component="h5">{data.destination && data.destination.name}</Typography>
      </Grid>
      <Grid item xs={6}>
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${keys.googleAPIKey}&q=Space+Needle,Seattle+WA`} allowFullScreen>
        </iframe>
      </Grid>
    </Grid>
  )
}

export default PlannerContainer;
