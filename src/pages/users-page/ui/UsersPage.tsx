import { useUsers } from '../model/hook/useUsers';
import { UsersList } from './users-lust/ui/UsersList';

import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Spinner } from '@/shared/ui/spinner/Spinner';

export const UsersPage = () => {
  const { isLoading, users, error } = useUsers();

  if (isLoading) {
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
          <UsersList usersList={users} />
        </div>
      </div>
    </>
  );
};
