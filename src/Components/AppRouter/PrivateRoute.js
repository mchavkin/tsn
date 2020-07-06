import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { LOGIN_PATH } from './paths';

function PrivateRoute(props) {
  const { as: Comp, loggedIn, ...route } = props;
  return (
    <>
      {!loggedIn ? <Redirect to={LOGIN_PATH} noThrow /> : <Comp {...route} />}
    </>
  );
}

const mapStateToProps = (state) => ({ loggedIn: !!state.token });

export default connect(mapStateToProps)(PrivateRoute);
