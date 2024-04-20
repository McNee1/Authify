import { redirect } from 'react-router-dom';
import { Store } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { PATH_ROUTER } from '@/app/providers/router';
import { RootState } from '@/app/providers/store-provider';
import { sessionAction } from '@/features/session';
import { UpdateSession } from '@/features/session/model/types/session.type';

const BASE_URL = import.meta.env.VITE_APP_FB_DATABASE_URL;

const AUTH_URL = import.meta.env.VITE_APP_FB_AUTH_URL;

const FB_STORAGE_URL = import.meta.env.VITE_APP_FB_STORAGE_URL;
const API_KEY = import.meta.env.VITE_APP_FB_KEY;

export const baseAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: AUTH_URL,
});

export const storageAxios = axios.create({
  baseURL: FB_STORAGE_URL,
});

export const interceptors = (store: Store) => {
  let isRetry = false;
  const refreshToken = (store.getState() as RootState).session.sessionData?.refreshToken;

  baseAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err: AxiosError) => {
      const originalConfig = err.config;

      if (!originalConfig) return;

      if (err.response && err.response.status === 401 && !isRetry) {
        isRetry = true;

        try {
          const { data } = await authAxios.post<UpdateSession>(
            `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
            {
              refresh_token: refreshToken,
              grant_type: 'refresh_token',
            }
          );

          store.dispatch(sessionAction.updateSession(data));

          return baseAxios(originalConfig);
        } catch (error: unknown) {
          redirect(PATH_ROUTER.LOGIN);

          return Promise.reject(
            error instanceof Error ? error : new Error(String(error))
          );
        }
      }

      return Promise.reject(err);
    }
  );
};
