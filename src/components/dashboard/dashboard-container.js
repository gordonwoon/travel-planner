import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Fab, Icon } from '@material-ui/core';
import { DashboardItem, DashboardModal } from './';

const data = [
  { primary: 'Finland', secondary: '13-5-19' },
  { primary: 'Amsterdam', secondary: '13-5-19' },
  { primary: 'London', secondary: '13-5-19' }
]

const styles = theme => ({
  root: {
    width: '100%'
  },
  addButton: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }
});

class DashboardContainer extends Component {
  state = {
    open: false
  }
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root} container spacing={2} >
        {data.map((item, key) => (
          <Grid item xs={12} md={6} key={key} >
            <DashboardItem {...item} />
          </Grid>
        ))}
        <Fab color="secondary" className={classes.addButton} onClick={this.handleOpen}>
          <Icon>add</Icon>
        </Fab>
        <DashboardModal
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(DashboardContainer);