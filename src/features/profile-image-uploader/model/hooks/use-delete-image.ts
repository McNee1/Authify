import { Dispatch, SetStateAction } from 'react';
import type { iTokenType, uIdType } from '../types/index.type';

import { StorageService } from '@/shared/services/storage';

export const useDeleteImage = (
  uId: uIdType,
  idToken: iTokenType,
  setHeroImage: Dispatch<SetStateAction<string | null>>
) => {
  const handleDeleteImage = () => {
    try {
      if (!idToken || !uId) return;

      const storageService = new StorageService();

      void storageService.deleteImage({
        params: { uId: uId, idToken: idToken },
      });
      setHeroImage(null);
    } catch (error) {
      console.log(error);
    }
  };
  return { handleDeleteImage };
};
