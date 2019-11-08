import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  iconHover: {
    '&:hover': {
      color: red[800],
    },
  },
}));

const NavigationLink = props => {
  const { to, open, primary, ...other } = props;
  const classes = useStyles();

  return (
    <ListItem button component={RouterLink} to={to} {...other}>
      <ListItemIcon>
        <Icon className={classes.iconHover} style={{ fontSize: 30 }}>
          {primary}
        </Icon>
      </ListItemIcon>
      <ListItemText primary={primary} />
      {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItem>
  );
}

export default NavigationLink
