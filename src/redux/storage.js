/* eslint-disable no-undef */
const TOKEN = 'TESTIO_TOKEN';

const storage = {
  getToken: () => sessionStorage.getItem(TOKEN),
  setToken: (token) => sessionStorage.setItem(TOKEN, token),
  clear: () => sessionStorage.clear(),
};

export default storage;
