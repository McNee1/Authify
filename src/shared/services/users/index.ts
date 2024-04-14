import { User } from '@/entities/user';
import { baseAxios } from '@/shared/config/axios';

export interface UserRequest extends Omit<User, 'photoURL'> {
  idToken: string;
  uId: string;
}

export class UsersService {
  async getAllUsers({
    params,
    config,
  }: AxiosRequestConfig<Pick<UserRequest, 'idToken'>>) {
    return baseAxios.get<Record<string, User>>(
      `/users.json?auth=${params.idToken}`,
      config
    );
  }

  async addUserToDatabase({ params, config }: AxiosRequestConfig<UserRequest>) {
    const { idToken, uId, ...rest } = params;
    console.log(idToken, uId, rest);
    return baseAxios.put(`/users/${uId}.json?auth=${idToken}`, rest, config);
  }
}
