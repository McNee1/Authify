import { useEffect, useState } from 'react';
import type { iTokenType, uIdType } from '../types/index.type';

import { getImgLink } from '@/shared/lib/get-img-link';
import { StorageService } from '@/shared/services/storage';

export const useFetchImage = (uId: uIdType, idToken: iTokenType) => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  useEffect(() => {
    const storageService = new StorageService();

    const fetchImage = async () => {
      if (!uId || !idToken) return;

      try {
        setIsLoadingImg(true);
        const { data } = await storageService.getImage({
          params: { uId: uId, idToken: idToken },
        });

        const imageUrl = getImgLink(data.name, data.downloadTokens);

        setHeroImage(imageUrl);
      } catch (error) {
        setHeroImage(null);
      } finally {
        setIsLoadingImg(false);
      }
    };

    void fetchImage();
  }, [idToken, uId]);

  return { heroImage, isLoadingImg, setHeroImage };
};
