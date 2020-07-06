import React from 'react';
import { Router } from '@reach/router';
import LoginPage from '../LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import Servers from '../ServersPage/Servers';
import DefaultRoute from './DefaultRoute';
import { LOGIN_PATH, SERVERS_PATH } from './paths';

export default function AppRouter() {
  return (
    <Router>
      <LoginPage path={LOGIN_PATH} />
      <PrivateRoute as={Servers} path={SERVERS_PATH} />
      <DefaultRoute default />
    </Router>
  );
}
