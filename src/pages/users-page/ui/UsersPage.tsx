import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { selectAuth } from '@/entities/auth';
import { selectUsersError } from '@/entities/users-list/model/selectors/select-users-error';
import { selectUsersList } from '@/entities/users-list/model/selectors/select-users-list';
import { selectUsersStatus } from '@/entities/users-list/model/selectors/select-users-status';
import { getAllUsers } from '@/entities/users-list/model/service/get-all-users';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Spinner } from '@/shared/ui/spinner/Spinner';

export const UsersPage = () => {
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

  if (status === 'pending' || status === 'idle') {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <div className='container'>
        <div className='m-auto max-w-[800px]'>
          <h1 className='mb-7 mt-12 text-3xl font-medium text-black'>Список аккаунтов</h1>
          {usersList?.map((user, id) => (
            <a
              href='/'
              key={id}
            >
              <div className='flex items-center border-b p-4 py-2.5 first-of-type:border-t'>
                <Avatar
                  userImg={user.photoURL ?? null}
                  userName={user.name}
                />
                <div className='ml-5 flex flex-col sm:grow sm:flex-row'>
                  <div className='font-medium text-black'>{user.name}</div>
                  <div className='ml-auto font-normal text-zinc-500'>{user.email}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
