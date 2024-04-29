import { ReactNode } from 'react';

import { Rule } from '@/pages/profile-page';

interface ProfileCardProps {
  description: string | null;
  editBtn?: ReactNode;
  email: string | null;
  logoutBtn?: ReactNode;
  rule: Rule;
  userName: string | null;
}

export const ProfileCard = ({
  description,
  email,
  userName,
  editBtn,
  logoutBtn,
}: ProfileCardProps) => {
  return (
    <>
      <div className='mb-5 flex flex-col items-start justify-between sm:flex-row'>
        <div className='mb-[10px]'>
          <div className='mb-2 text-3xl font-medium'>{userName}</div>
          <div className='text-zinc-500'>{email}</div>
        </div>
        {editBtn}
      </div>

      <div className='mb-10'>
        <h2 className='mb-2 text-base text-zinc-600'>О себе: </h2>
        <p className='text-sm text-zinc-500'>{description ?? 'Нету описания'}</p>
      </div>
      {logoutBtn}
    </>
  );
};
