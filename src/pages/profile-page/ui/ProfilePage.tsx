import { useEffect } from 'react';
import { useProfile } from '../model/hook/use-profile';
import { useUpdateProfile } from '../model/hook/use-update-profile';
import { ProfilePageProps } from '../model/types/index.type';

import { ProfileImageUploader } from '@/features/profile-image-uploader';
import { OpenModalBtn, ProfileUpdateModal } from '@/features/profile-update';
import { Logout } from '@/features/session/ui/logout/Logout';
import { OWNER } from '@/shared/constant/common';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Portal } from '@/shared/ui/portal/Portal';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { ProfileCard } from '@/widgets/profile-card';

export const ProfilePage = ({ rule }: ProfilePageProps) => {
  const { isLoading, profileData, setProfileData, uId, error } = useProfile(rule);

  const { handleCloseModal, handleOpenModal, handleUpdateProfile, isOpenModal } =
    useUpdateProfile(setProfileData);

  useEffect(() => {
    throw Error('foo');
  });
  if (!profileData && error) {
    return <ErrorMessage error={error} />;
  }
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <ProfileImageUploader
        rule={rule}
        uId={uId}
      />
      <div className='container'>
        <div className='cart m-auto mt-20 max-w-[800px]'>
          <Avatar
            userImg={profileData?.photoURL ?? null}
            userName={profileData?.name ?? null}
            className='absolute top-[13.5rem]'
            size='md'
          />

          <ProfileCard
            editBtn={rule === OWNER && <OpenModalBtn onOpenModal={handleOpenModal} />}
            description={profileData?.description ?? null}
            logoutBtn={rule === OWNER && <Logout />}
            userName={profileData?.name ?? null}
            email={profileData?.email ?? null}
            rule={rule}
          />
        </div>
      </div>
      <Portal>
        <ProfileUpdateModal
          onUpdateProfile={handleUpdateProfile}
          onCloseModal={handleCloseModal}
          profileData={profileData}
          isOpenModal={isOpenModal}
        />
      </Portal>
    </>
  );
};
