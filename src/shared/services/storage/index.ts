import type { UserRequest } from '../users';
import type { StorageResponse } from './type';

import { storageAxios } from '@/shared/config/axios/axios-instance';

type ImageRequest = Pick<UserRequest, 'idToken' | 'uId'>;

interface T extends ImageRequest {
  file: File;
}

const getEncodePath = (id: string) => encodeURIComponent(`users/${id}/bg-image`);

export class StorageService {
  getImage({ params, config }: AxiosRequestConfig<ImageRequest>) {
    const code = getEncodePath(params.uId);

    return storageAxios.get<StorageResponse>(
      `${code}.jpg?alt=media.json&auth=${params.idToken}`,
      config
    );
  }

  addImage({ params, config }: AxiosRequestConfig<T>) {
    const code = getEncodePath(params.uId);

    return storageAxios.post<StorageResponse>(
      `${code}.jpg?alt=media.json&auth=${params.idToken}`,
      params.file,
      config
    );
  }

  deleteImage({ params, config }: AxiosRequestConfig<ImageRequest>) {
    const code = getEncodePath(params.uId);

    return storageAxios.delete<StorageResponse>(
      `${code}.jpg?alt=media.json&auth=${params.idToken}`,
      config
    );
  }
}
