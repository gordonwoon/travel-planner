import React from 'react';
import keys from '../../config/keys';
import _ from 'lodash';

const formatQueries = queries => Object.entries(queries).reduce((acc, curr) => {
  if (_.isEmpty(curr[1])) return acc;
  return `${acc}${curr[0]}=${curr[1]}&`;
}, '')

const Directions = ({ title, width = 600, height = 300, queries = {}, allowFullScreen = false }) => {
  const formattedQueries = formatQueries(queries);
  return (
    <iframe
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen={allowFullScreen}
      src={`https://www.google.com/maps/embed/v1/directions?key=${keys.googleAPIKey}&${formattedQueries}`}>
    </iframe>
  )
}

const Place = ({ title, width = 600, height = 300, queries = {}, allowFullScreen = false }) => {
  const formattedQueries = formatQueries(queries);
  return (
    <iframe
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen={allowFullScreen}
      src={`https://www.google.com/maps/embed/v1/place?key=${keys.googleAPIKey}&${formattedQueries}`}>
    </iframe>
  )
}

export default { Directions, Place };
