import { User } from '@/entities/user';
import { Session } from '@/features/session';
import { baseAxios } from '@/shared/config/axios';

export interface UserRequest extends Omit<User, 'photoURL'> {
  idToken: string;
  uId: string;
}

type UpdateUser = Omit<Session, 'refreshToken'> & {
  updatedInfo: User;
};

export class UsersService {
  async getAllUsers({
    params,
    config,
  }: AxiosRequestConfig<Pick<UserRequest, 'idToken'>>) {
    return baseAxios.get<Record<string, User> | null>(
      `/users.json?auth=${params.idToken}`,
      config
    );
  }

  async addUserToDatabase({ params, config }: AxiosRequestConfig<UserRequest>) {
    const { idToken, uId, ...rest } = params;
    return baseAxios.put(`/users/${uId}.json?auth=${idToken}`, rest, config);
  }

  async getUserInfo({
    params,
    config,
  }: AxiosRequestConfig<Omit<Session, 'refreshToken'>>) {
    return baseAxios.get<User>(
      `/users/${params.uId}.json?auth=${params.idToken}`,
      config
    );
  }

  async updateUserInfo({ params, config }: AxiosRequestConfig<UpdateUser>) {
    return baseAxios.put<User>(
      `/users/${params.uId}.json?auth=${params.idToken}`,
      { ...params.updatedInfo },
      config
    );
  }
}
