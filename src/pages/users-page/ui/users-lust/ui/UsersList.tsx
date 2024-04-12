import { User } from '@/entities/user';
import { Avatar } from '@/shared/ui/avatar/Avatar';

interface UsersListProps {
  usersList: User[] | null;
}

export const UsersList = ({ usersList }: UsersListProps) => {
  return (
    <div>
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
  );
};

export default UsersList;
