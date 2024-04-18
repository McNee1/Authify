import { User } from '@/entities/user';
import { Session } from '@/features/session';
import { baseAxios } from '@/shared/config/axios';

export class ProfileService {
  async getProfileInfo({
    params,
    config,
  }: AxiosRequestConfig<Omit<Session, 'refreshToken'>>) {
    return baseAxios.get<User>(
      `/users/${params.uId}.json?auth=${params.idToken}`,
      config
    );
  }
}
