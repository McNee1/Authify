import { UserSchema } from '@/entities/user/model/types/user';
import { baseAxios } from '@/shared/config/axios';

export class UsersService {
  async getAllUsers({
    params,
    config,
  }: AxiosRequestConfig<Pick<UserSchema, 'idToken' | 'uId'>>) {
    return baseAxios.get<Record<string, UserSchema>>(
      `/users.json?auth=${params.idToken}`,
      config
    );
  }

  async addUserToDatabase({ params, config }: AxiosRequestConfig<UserSchema>) {
    const { idToken, uId, ...rest } = params;
    console.log(idToken, uId, rest);
    return baseAxios.put(`/users/${uId}.json?auth=${idToken}`, rest, config);
  }
}
