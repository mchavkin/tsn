import { navigate } from '@reach/router';
import {
  LOGIN, LOGOUT, LOADING, SHOW_ERROR, CLEAR_ERROR, LOAD_DATA,
} from './actionTypes';
import storage from './storage';
import * as api from '../api/api';
import { SERVERS_PATH } from '../Components/AppRouter/paths';
import { AUTH_ERROR, DATA_ERROR } from '../resources/messages/messsages';

const ERROR_MESSAGE_DURATION = 4000;

export function clearError() {
  return ({ type: CLEAR_ERROR });
}

export function showError(error) {
  return function (dispatch) {
    dispatch({
      type: SHOW_ERROR,
      error,
    });
    setTimeout(() => dispatch(clearError()), ERROR_MESSAGE_DURATION);
  };
}

export function login(credentials) {
  return function (dispatch) {
    dispatch({ type: LOADING });

    api.getToken(credentials).then(({ data }) => {
      storage.setToken(data.token);
      dispatch({
        type: LOGIN,
        ...data,
      });
      return navigate(SERVERS_PATH);
    }).catch(() => {
      dispatch(showError(AUTH_ERROR));
    });
  };
}

export function logout() {
  return function (dispatch) {
    storage.clear();
    dispatch({
      type: LOGOUT,
    });
    return navigate(LOGIN);
  };
}

export function loadServers() {
  return function (dispatch) {
    dispatch({ type: LOADING });

    api.getServers()
      .then(({ data }) => {
        const servers = data.sort((a, b) => {
          const distanceDiff = a.distance - b.distance;
          if (distanceDiff) return distanceDiff;

          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        dispatch({
          type: LOAD_DATA,
          servers,
        });
      }).catch(() => {
        dispatch(showError(DATA_ERROR));
      });
  };
}
