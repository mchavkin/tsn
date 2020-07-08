import React from 'react';
import {
  fireEvent, renderWithRouter, screen, waitFor,
} from './test-utils/test-utils';
import App from './App';
import { LOGIN_PATH } from './Components/AppRouter/paths';
import * as api from './api/api';

jest.mock('./api/api');

test('app', async () => {
  renderWithRouter(<App />, { route: LOGIN_PATH });
  await waitFor(() => expect(screen.queryByTestId('username')).toBeTruthy());
  const username = screen.getByPlaceholderText('Username');
  const password = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByTestId('login-button');

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

  // await waitFor(() => expect(api.getServers).toHaveBeenCalled());
});
