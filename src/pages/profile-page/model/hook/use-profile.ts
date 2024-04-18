import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Rule } from '../types/index.type';

import { useAppSelector } from '@/app/providers/store-provider';
import type { User } from '@/entities/user';
import { selectAccessToken, selectUserId } from '@/features/session';
import { ProfileService } from '@/shared/services/profile';

export const useProfile = (rule: Rule) => {
  const idToken = useAppSelector(selectAccessToken);
  const ownerId = useAppSelector(selectUserId);

  const [profileData, setProfileData] = useState<User | null>(null);

  const [isLoading, setLoading] = useState(false);

  const { guestId } = useParams();

  const uId = rule === 'owner' ? ownerId : guestId;

  useEffect(() => {
    const profileService = new ProfileService();

    if (!uId || !idToken) return;

    const fetchProfileInfo = async () => {
      setLoading(true);
      try {
        const { data } = await profileService.getProfileInfo({
          params: { idToken, uId },
        });
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile info:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchProfileInfo();
  }, [guestId, idToken, rule, uId]);

  return { profileData, isLoading, idToken, uId };
};