import {
  AuthUserSchema,
  CreateUserResponse,
  LogInUserResponse,
  UpdateUserSchema,
} from './type';

import { authAxios } from '@/shared/config/axios';

const API_KEY = import.meta.env.VITE_APP_FB_KEY;

export class AuthService {
  async createUser({ params, config }: AxiosRequestConfig<AuthUserSchema>) {
    return authAxios.post<Omit<CreateUserResponse, 'registered'>>(
      `:signUp?key=${API_KEY}`,
      { ...params, returnSecureToken: true },
      config
    );
  }

  async logInUser({ params, config }: AxiosRequestConfig<AuthUserSchema>) {
    return authAxios.post<LogInUserResponse>(
      `:signInWithPassword?key=${API_KEY}`,
      {
        ...params,
        returnSecureToken: true,
      },
      config
    );
  }

  async updateProfile({ params, config }: AxiosRequestConfig<UpdateUserSchema>) {
    return authAxios.post(
      `:update?key=${API_KEY}`,
      { ...params, returnSecureToken: true },
      config
    );
  }
}
