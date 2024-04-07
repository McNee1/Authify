import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_FB_DATABASE_URL;

const AUTH_URL = import.meta.env.VITE_APP_FB_AUTH_URL;

export const baseAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: AUTH_URL,
});

// // Add a response interceptor to handle errors and update the idToken
// baseAxios.interceptors.response.use(
//   function (response) {
//     console.log(response);
//     return response;
//   },
//   function (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to update the idToken
authAxios.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const idToken = response.data?.idToken;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const uId = response.data?.localId;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      idToken && localStorage.setItem('idToken', idToken);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      uId && localStorage.setItem('uId', uId);
    }

    console.log(response);

    return response;
  },
  function (error) {
    console.log(error);
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
    return Promise.reject(error);
  }
);
