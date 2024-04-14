import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import {
  selectUsersError,
  selectUsersList,
  selectUsersStatus,
} from '@/entities/users-list';
import { getAllUsers } from '@/entities/users-list/model/service/get-all-users';
import { selectAccessToken } from '@/features/session';

export const useUsers = () => {
  const accessToken = useAppSelector(selectAccessToken);

  const dispatch = useAppDispatch();

  const usersList = useAppSelector(selectUsersList);
  const status = useAppSelector(selectUsersStatus);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    const getUsers = () => {
      if (accessToken) {
        void dispatch(getAllUsers({ idToken: accessToken }));
      }
    };
    getUsers();
  }, [dispatch, accessToken]);

  return { usersList, status, error };
};
