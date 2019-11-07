import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { DashboardItem } from './';

const data = [
  { primary: 'Finland', secondary: '13-5-19', content: 'Dog Sledding' },
  { primary: 'Amsterdam', secondary: '13-5-19', content: 'Bicycles' },
  { primary: 'London', secondary: '13-5-19', content: 'Big Ben' }
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
      <div>
        <List className={classes.root}>
          {data.map(item => (
            <DashboardItem {...item} />
          ))}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(DashboardContainer);