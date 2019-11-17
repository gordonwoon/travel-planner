import React from 'react';
import keys from '../../config/keys';

const GoogleMap = ({ photoreference = '', maxwidth = 400, maxheight = 250 }) => {
  return (
    <img
      src={`https://maps.googleapis.com/maps/api/place/photo?key=${keys.googleAPIKey}&photoreference=${photoreference}&maxwidth=${maxwidth}&maxheight=${maxheight}`}>
    </img>
  )
}

export default GoogleMap;
