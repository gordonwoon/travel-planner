import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const PlannerList = props => {
  const { places, id } = props;
  return (
    <List>
      {places.map(place => (
        <ListItem key={place.id}>
          <ListItemText primary={place.name} />
          <ListItemText secondary={place.address} />
        </ListItem>
      ))}
    </List>
  );
}

export default PlannerList
