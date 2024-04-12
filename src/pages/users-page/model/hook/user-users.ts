import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { selectAuth } from '@/entities/auth';
import {
  selectUsersError,
  selectUsersList,
  selectUsersStatus,
} from '@/entities/users-list';
import { getAllUsers } from '@/entities/users-list/model/service/get-all-users';

export const useUsers = () => {
  const token = useAppSelector(selectAuth)?.idToken;

  const dispatch = useAppDispatch();

  const usersList = useAppSelector(selectUsersList);
  const status = useAppSelector(selectUsersStatus);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    const getUsers = () => {
      if (token) {
        void dispatch(getAllUsers({ idToken: token }));
      }
    };
    getUsers();
  }, [dispatch, token]);

  return { usersList, status, error };
};
