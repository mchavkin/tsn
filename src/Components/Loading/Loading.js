import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
}));

function Loading({ loading }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading && <LinearProgress />}
    </div>
  );
}

const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps)(Loading);
