import { useProfile } from '../model/hook/use-profile';
import { ProfilePageProps } from '../model/types/index.type';

import { ProfileImageUploader } from '@/features/profile-image-uploader';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Button } from '@/shared/ui/button/Button';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { ProfileCard } from '@/widgets/profile-card';

export const ProfilePage = ({ rule }: ProfilePageProps) => {
  const { isLoading, profileData, idToken, uId } = useProfile(rule);

  return (
    <>
      {!isLoading ? (
        <>
          <ProfileImageUploader
            idToken={idToken}
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
                logoutBtn={
                  rule === 'owner' && (
                    <Button className='flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'>
                      <>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 25 26'
                          className='mr-2.5'
                          height='26'
                          fill='none'
                          width='25'
                        >
                          <path
                            d='M18.6768 3.60059C17.8589 3.60059 17.041 3.91797 16.4062 4.55273L4.05273 16.9062L4.00391 17.1504L3.14941 21.4473L2.90527 22.5947L4.05273 22.3506L8.34961 21.4961L8.59375 21.4473L20.9473 9.09375C22.2168 7.82422 22.2168 5.82227 20.9473 4.55273C20.3125 3.91797 19.4946 3.60059 18.6768 3.60059ZM18.6768 5.08984C19.0704 5.08984 19.4672 5.2699 19.8486 5.65137C20.6085 6.41125 20.6085 7.23523 19.8486 7.99512L19.2871 8.53223L16.9678 6.21289L17.5049 5.65137C17.8864 5.2699 18.2831 5.08984 18.6768 5.08984ZM15.8691 7.31152L18.1885 9.63086L8.74023 19.0791C8.22754 18.0781 7.42188 17.2725 6.4209 16.7598L15.8691 7.31152ZM5.41992 18.0293C6.35681 18.4077 7.09229 19.1432 7.4707 20.0801L4.90723 20.5928L5.41992 18.0293Z'
                            fill='black'
                          />
                        </svg>
                        <span className='font-medium'>Редактировать</span>
                      </>
                    </Button>
                  )
                }
                editBtn={
                  rule === 'owner' && (
                    <Button className='mb-4 flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'>
                      <>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 25 26'
                          className='mr-2.5'
                          height='26'
                          fill='none'
                          width='25'
                        >
                          <path
                            d='M12.5 3.625C7.33032 3.625 3.125 7.83032 3.125 13C3.125 18.1697 7.33032 22.375 12.5 22.375C15.6647 22.375 18.4692 20.8033 20.166 18.3955L18.8965 17.4922C17.4835 19.5002 15.1489 20.8125 12.5 20.8125C8.17566 20.8125 4.6875 17.3243 4.6875 13C4.6875 8.67566 8.17566 5.1875 12.5 5.1875C15.1489 5.1875 17.4805 6.49976 18.8965 8.50781L20.166 7.60449C18.4692 5.19666 15.6647 3.625 12.5 3.625ZM18.2373 9.31348L17.1143 10.4365L18.8965 12.2188H9.375V13.7812H18.8965L17.1143 15.5635L18.2373 16.6865L21.3623 13.5615L21.8994 13L21.3623 12.4385L18.2373 9.31348Z'
                            fill='black'
                          />
                        </svg>
                        <span className='font-medium'>Выйти</span>
                      </>
                    </Button>
                  )
                }
                description={profileData?.description ?? null}
                userName={profileData?.name ?? null}
                email={profileData?.email ?? null}
                rule={rule}
              />
            </div>
          </div>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};
