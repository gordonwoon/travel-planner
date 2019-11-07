import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  item: {
    justifyContent: 'center'
  },
  inline: {
    display: 'inline',
  },
  img: {
    borderRadius: '5px',
    height: '250px',
    marginRight: '10px'
  }
}));

const DashboardItem = ({ primary, secondary, content }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItem className={classes.item} alignItems="center">
        <img className={classes.img} alt="Remy Sharp" src="https://via.placeholder.com/400x250" />
        <ListItemText
          primary={primary}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {secondary}
              </Typography>
              {content}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

export default DashboardItem;