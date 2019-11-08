import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { DashboardItem } from './';

const data = [
  { primary: 'Finland', secondary: '13-5-19' },
  { primary: 'Amsterdam', secondary: '13-5-19' },
  { primary: 'London', secondary: '13-5-19' }
]

const styles = theme => ({
  root: {
    width: '100%'
  }
});

class DashboardContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root} container spacing={2} >
        {data.map((item, key) => (
          <Grid item xs={6} key={key} >
            <DashboardItem {...item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(DashboardContainer);