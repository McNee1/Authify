import { Dispatch, SetStateAction } from 'react';
import type { iTokenType, uIdType } from '../types/index.type';

import { StorageService } from '@/shared/services/storage';

export const useAddImage = (
  uId: uIdType,
  idToken: iTokenType,
  setHeroImage: Dispatch<SetStateAction<string | null>>
) => {
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!uId || !idToken || !file) return;

    setHeroImage(URL.createObjectURL(file));

    try {
      const storageService = new StorageService();

      void storageService.addImage({
        params: { uId: uId, file, idToken },
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return { handleAddImage };
};
