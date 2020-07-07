import React from 'react';
import { renderWithRouter, screen, waitFor } from '../../test-utils/test-utils';
import AppRouter from './AppRouter';
import { SERVERS_PATH, LOGIN_PATH } from './paths';

test('Logged in user (with token) can access login page, server page '
    + 'and will be redirected to server page from unknown url', async () => {
  const {
    history: { navigate },
  } = renderWithRouter(<AppRouter />, { route: LOGIN_PATH, initialState: { token: 'someToken', servers: [] } });

  await waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  expect(screen.queryByTestId('username')).toBeTruthy();

  // navigate to Server page
  await navigate(SERVERS_PATH);
  await waitFor(() => expect(screen.queryByTestId('logout-button')).toBeTruthy());
  expect(screen.queryByTestId('logout-button')).toBeTruthy();

  // try navigate to unknown page and land at Server page
  await navigate('/unknown-route');
  await waitFor(() => expect(screen.queryByTestId('logout-button')).toBeTruthy());
  expect(screen.queryByTestId('logout-button')).toBeTruthy();
});

test('When user is not logged in (no token) he can only access login page '
    + 'and will be redirected to login page both from server and unknown urls', async () => {
  const {
    history: { navigate },
  } = renderWithRouter(<AppRouter />, { route: LOGIN_PATH });
  await waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  expect(screen.queryByTestId('username')).toBeTruthy();

  // try navigate to Server page and land at Login page
  await navigate(SERVERS_PATH);
  await waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  expect(screen.queryByTestId('username')).toBeTruthy();

  // try navigate to unknown page and land at Login page
  await navigate('/unknown-route');
  await waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  expect(screen.queryByTestId('username')).toBeTruthy();
});
