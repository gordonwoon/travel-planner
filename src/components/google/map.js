import React from 'react';
import keys from '../../config/keys';

const GoogleMap = ({ title, width = 600, height = 300, queries = {}, allowFullScreen = false }) => {
  const formatQueries = Object.entries(queries).reduce((acc, curr) => `${acc}${curr[0]}=${curr[1]}&`, '')
  return (
    <iframe
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen={allowFullScreen}
      src={`https://www.google.com/maps/embed/v1/place?key=${keys.googleAPIKey}&${formatQueries}`}>
    </iframe>
  )
}

export default GoogleMap;
