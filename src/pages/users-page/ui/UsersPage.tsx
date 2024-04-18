import { useUsers } from '../model/hook/useUsers';
import { UsersList } from './users-lust/ui/UsersList';

import { useAppSelector } from '@/app/providers/store-provider';
import { selectAccessToken } from '@/features/session';
// import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Spinner } from '@/shared/ui/spinner/Spinner';

export const UsersPage = () => {
  const token = useAppSelector(selectAccessToken);
  const { isLoading, users } = useUsers(token);

  if (isLoading) {
    return <Spinner />;
  }
  // if (error) {
  //   return <ErrorMessage error={error} />;
  // }

  return (
    <>
      <div className='container'>
        <div className='m-auto max-w-[800px]'>
          <h1 className='mb-7 mt-12 text-3xl font-medium text-black'>Список аккаунтов</h1>
          <UsersList usersList={users} />
        </div>
      </div>
    </>
  );
};
