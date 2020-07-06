import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { clearError } from '../../redux/actions';

function ErrorDisplay({ error, clearError }) {
  return (
    <Snackbar
      open={error}
      onClose={clearError}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      {error
            && (
            <MuiAlert elevation={6} variant="filled" severity={error.severity} onClose={clearError}>
              {error.message}
            </MuiAlert>
            )}
    </Snackbar>
  );
}

const mapStateToProps = (state) => ({ error: state.error });

export default connect(mapStateToProps, { clearError })(ErrorDisplay);
