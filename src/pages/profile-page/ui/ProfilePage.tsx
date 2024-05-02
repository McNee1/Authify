import { useProfile } from '../model/hook/use-profile';
import { useUpdateProfile } from '../model/hook/use-update-profile';
import { ProfilePageProps } from '../model/types/index.type';

import { ProfileImageUploader } from '@/features/profile-image-uploader';
import { OpenModalBtn, ProfileUpdateModal } from '@/features/profile-update';
import { Logout } from '@/features/session/ui/logout/Logout';
import { RULES } from '@/shared/constant/common';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { Portal } from '@/shared/ui/portal/Portal';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { ProfileCard } from '@/widgets/profile-card';

export const ProfilePage = ({ rule }: ProfilePageProps) => {
  const { isLoading, profileData, setProfileData, uId, error, currentRule } =
    useProfile(rule);

  const { handleCloseModal, handleOpenModal, handleUpdateProfile, isOpenModal } =
    useUpdateProfile(setProfileData);

  if (!profileData && error) {
    return <ErrorMessage error={error} />;
  }
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <ProfileImageUploader
        rule={currentRule}
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
            editBtn={
              currentRule === RULES.OWNER && (
                <OpenModalBtn onOpenModal={handleOpenModal} />
              )
            }
            logoutBtn={currentRule === RULES.OWNER && <Logout />}
            description={profileData?.description ?? null}
            userName={profileData?.name ?? null}
            email={profileData?.email ?? null}
            rule={currentRule}
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
