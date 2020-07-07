import React from 'react';
import { waitFor } from '@testing-library/dom';
import { render, screen } from '../../test-utils/test-utils';
import Servers from './Servers';

jest.mock('../../api/api', () => ({
  getServers: () => Promise.resolve({
    data: [{ name: 'name1', distance: 250 },
      { name: 'name2', distance: 50 },
      { name: 'name2', distance: 500 },
    ],
  }),
}));

test('Servers page renders and fetches data ', async () => {
  render(<Servers />);
  expect(screen.queryByTestId('logout-button')).toBeTruthy();
  expect(screen.queryByText('DISTANCE')).toBeTruthy();
  await waitFor(() => expect(screen.queryByText('name1')).toBeTruthy());
  expect(screen.queryByText('name1')).toBeTruthy();
  expect(screen.queryAllByText('name2').length).toEqual(2);
  expect(screen.queryByText('500 km')).toBeTruthy();
});
