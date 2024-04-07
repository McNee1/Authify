import { authAxios } from '@/shared/config/axios';

const API_KEY = import.meta.env.VITE_APP_FB_KEY;

interface AuthUserSchema {
  email: string;
  password: string;
}

interface UpdateUserSchema {
  deleteAttribute?: string[];
  displayName: string;
  idToken: string;
  photoUrl?: string;
}

interface CreateUserResponse {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: string;
}

interface LogInUserResponse {
  email: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  refreshToken: string;
}

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

  async updateUserInfo({ params, config }: AxiosRequestConfig<UpdateUserSchema>) {
    return authAxios.post(
      `:update?key=${API_KEY}`,
      { ...params, returnSecureToken: true },
      config
    );
  }
}
