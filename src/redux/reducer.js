import {
  LOGIN, LOGOUT, LOADING, LOAD_DATA, SHOW_ERROR, CLEAR_ERROR,
} from './actionTypes';
import storage from './storage';

const initialState = {
  loading: false,
  token: storage.getToken(),
  servers: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return ({
        ...state,
        loading: false,
        token: action.token,
      });
    }
    case LOGOUT: {
      return ({
        ...state,
        loading: false,
        token: null,
      });
    }
    case LOADING: {
      return ({
        ...state,
        loading: true,
      });
    }
    case SHOW_ERROR: {
      return ({
        ...state,
        loading: false,
        error: action.error,
      });
    }
    case CLEAR_ERROR: {
      return ({
        ...state,
        loading: false,
        error: null,
      });
    }
    case LOAD_DATA: {
      return ({
        ...state,
        servers: action.servers,
        loading: false,
      });
    }
    default:
      return state;
  }
}
