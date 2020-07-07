// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
import reducer from '../redux/reducer';

const reducerInitialState = {
  loading: false,
  token: null,
  servers: [],
  error: null,
};

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

function renderWithRouter(
  ui,
  {
    initialState,
    store,
    route = '/',
    history = createHistory(createMemorySource(route)),
  } = {},
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>, { initialState, store }),
    history,
  };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render, renderWithRouter };
