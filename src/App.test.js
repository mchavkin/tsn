import React from 'react';
import {
  fireEvent, renderWithRouter, screen, waitFor, act,
} from './test-utils/test-utils';
import App from './App';
import { LOGIN_PATH } from './Components/AppRouter/paths';
import * as api from './api/api';
import { AUTH_ERROR } from './resources/messages/messsages';

jest.mock('./api/api');
jest.useFakeTimers();

function setup() {
  renderWithRouter(<App />, { route: LOGIN_PATH });
  // waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  const username = screen.getByPlaceholderText('Username');
  const password = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByTestId('login-button');
  return { username, password, loginButton };
}

test('submit login credentials ', async () => {
  const { username, password, loginButton } = setup();

  api.getToken.mockResolvedValueOnce({ data: { token: 'test-token' } });
  api.getServers.mockResolvedValueOnce({
    data: [{ name: 'name1', distance: 250 },
      { name: 'name2', distance: 50 },
      { name: 'name2', distance: 500 },
    ],
  });

  fireEvent.change(username, { target: { value: 'usr' } });
  fireEvent.change(password, { target: { value: 'pwd' } });
  fireEvent.click(loginButton);

  await waitFor(() => expect(api.getToken).toHaveBeenCalled());

  expect(api.getToken).toHaveBeenCalledWith({ username: 'usr', password: 'pwd' });
});

test('when error occurs an alert pops up and the disappear', async () => {
  const { username, password, loginButton } = setup();

  api.getToken.mockImplementation(() => Promise.reject(new Error('test error')));

  fireEvent.change(username, { target: { value: 'usr' } });
  fireEvent.change(password, { target: { value: 'pwd' } });
  fireEvent.click(loginButton);

  // test if alert message pops up and displays the error text
  await waitFor(() => expect(screen.queryByTestId('error')).toBeTruthy());
  expect(screen.queryByText(AUTH_ERROR.message)).toBeTruthy();

  // test if after fixed time it disappears
  jest.runAllTimers();
  expect(screen.queryByTestId('error')).not.toBeTruthy();
});
