import { User } from '@/entities/user';
import { Session } from '@/features/session';
import { baseAxios } from '@/shared/config/axios';

type A = Omit<Session, 'refreshToken'> & {
  updatedInfo: User;
};

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
  async updateProfileInfo({ params, config }: AxiosRequestConfig<A>) {
    return baseAxios.put<User>(
      `/users/${params.uId}.json?auth=${params.idToken}`,
      { ...params.updatedInfo },
      config
    );
  }
}
