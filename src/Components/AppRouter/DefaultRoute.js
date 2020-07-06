import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { LOGIN_PATH, SERVERS_PATH } from './paths';

function DefaultRoute({ loggedIn }) {
  return (
    <Redirect to={loggedIn ? SERVERS_PATH : LOGIN_PATH} noThrow />
  );
}

const mapStateToProps = (state) => ({ loggedIn: !!state.token });

export default connect(mapStateToProps)(DefaultRoute);
