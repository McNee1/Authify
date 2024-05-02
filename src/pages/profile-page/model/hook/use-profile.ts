import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Rule } from '../types/index.type';

import { useAppSelector } from '@/app/providers/store-provider';
import type { User } from '@/entities/user';
import { selectAccessToken, selectUserId } from '@/features/session';
import { RULES } from '@/shared/constant/common';
import { handleResponseError } from '@/shared/lib/handle-response-error';
import { UsersService } from '@/shared/services/users';

export const useProfile = (rule: Rule) => {
  const idToken = useAppSelector(selectAccessToken);

  const ownerId = useAppSelector(selectUserId);

  const [profileData, setProfileData] = useState<User | null>(null);

  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const { guestId } = useParams();

  const uId = rule === RULES.OWNER ? ownerId : guestId === ownerId ? ownerId : guestId;

  const currentRule = (
    rule === RULES.OWNER ? RULES.OWNER : guestId === ownerId ? RULES.OWNER : RULES.GUEST
  ) as Rule;

  useEffect(() => {
    const usersService = new UsersService();

    if (!uId || !idToken) return;

    const fetchProfileInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await usersService.getUserInfo({
          params: { idToken, uId },
        });

        setProfileData(data);
        setError(null);
      } catch (error) {
        handleResponseError(error, setError);
        console.error('Error fetching profile info:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchProfileInfo();
  }, [guestId, idToken, uId]);

  return { profileData, isLoading, uId, error, setProfileData, currentRule };
};
