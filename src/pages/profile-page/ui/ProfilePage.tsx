import { useState } from 'react';
import { useProfile } from '../model/hook/use-profile';
import { ProfilePageProps } from '../model/types/index.type';
import { EditButton } from './edit-button/EditButton';

import { User } from '@/entities/user';
import { ProfileImageUploader } from '@/features/profile-image-uploader';
import { Logout } from '@/features/session/ui/logout/Logout';
import { UpdateProfileInfo } from '@/features/update-profile-info';
import { OWNER } from '@/shared/constant/common';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { ProfileCard } from '@/widgets/profile-card';

export const ProfilePage = ({ rule }: ProfilePageProps) => {
  const { isLoading, profileData, setProfileData, uId, error } = useProfile(rule);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleUpdateProfile = (formData: User) => {
    setProfileData(formData);
    console.log(formData, '@');
  };

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
            editBtn={rule === OWNER && <EditButton onOpenModal={handleOpenModal} />}
            description={profileData?.description ?? null}
            logoutBtn={rule === OWNER && <Logout />}
            userName={profileData?.name ?? null}
            email={profileData?.email ?? null}
            rule={rule}
          />
        </div>
      </div>
      <UpdateProfileInfo
        onUpdateProfile={handleUpdateProfile}
        onCloseModal={handleCloseModal}
        profileData={profileData}
        isOpenModal={isOpenModal}
      />
    </>
  );
};
