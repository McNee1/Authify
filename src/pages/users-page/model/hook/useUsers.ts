import { useEffect, useState } from 'react';
import type { UsersListSchema } from '../types/index.type';

import { UsersService } from '@/shared/services/users';

const usersService = new UsersService();

export const useUsers = (idToken: string | null) => {
  const [users, setUsers] = useState<UsersListSchema[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        if (!idToken) return;

        const { data } = await usersService.getAllUsers({
          params: { idToken: idToken },
        });

        const formattedData = Object.keys(data).map((el) => ({
          ...data[el],
          uId: el,
        }));

        setUsers(formattedData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    void getUsers();
  }, [idToken]);
  return { users, isLoading };
};
