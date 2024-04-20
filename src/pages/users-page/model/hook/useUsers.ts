import { useEffect, useState } from 'react';
import type { UsersListSchema } from '../types/index.type';

import { useAppSelector } from '@/app/providers/store-provider';
import { selectAccessToken } from '@/features/session';
import { handleResponseError } from '@/shared/lib/handle-response-error';
import { UsersService } from '@/shared/services/users';

const usersService = new UsersService();

export const useUsers = () => {
  const [users, setUsers] = useState<UsersListSchema[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const idToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!idToken) return;

        const { data } = await usersService.getAllUsers({
          params: { idToken: idToken },
        });

        if (data) {
          const formattedData = Object.keys(data).map((el) => ({
            ...data[el],
            uId: el,
          }));

          setUsers(formattedData);
        } else {
          setUsers(data);
        }
      } catch (error) {
        handleResponseError(error, setError);
      } finally {
        setIsLoading(false);
      }
    };
    void getUsers();
  }, [idToken]);
  return { users, isLoading, error };
};
