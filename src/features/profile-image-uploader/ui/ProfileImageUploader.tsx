import { useAddImage } from '../model/hooks/use-add-image';
import { useDeleteImage } from '../model/hooks/use-delete-image';
import { useFetchImage } from '../model/hooks/use-fetch-image';

import { useAppSelector } from '@/app/providers/store-provider';
import { selectAccessToken } from '@/features/session';
import { Rule } from '@/pages/profile-page';
import { OWNER } from '@/shared/constant/const';
import { Button } from '@/shared/ui/button/Button';
import { ProfileHeroImage } from '@/shared/ui/profile-hero-image/ProfileHeroImage';

interface ProfileImageUploaderProps {
  rule: Rule;
  uId: string | null | undefined;
}

export const ProfileImageUploader = ({ uId, rule }: ProfileImageUploaderProps) => {
  const idToken = useAppSelector(selectAccessToken);

  const { heroImage, isLoadingImg, setHeroImage } = useFetchImage(uId, idToken);

  const { handleAddImage } = useAddImage(uId, idToken, setHeroImage);

  const { handleDeleteImage } = useDeleteImage(uId, idToken, setHeroImage);

  return (
    <div className='relative h-48'>
      <ProfileHeroImage image={heroImage} />

      {rule === OWNER && !isLoadingImg && (
        <div className='duration-100" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-neutral-300 bg-white ease-in hover:bg-zinc-200'>
          {heroImage ? (
            <Button
              className='flex cursor-pointer gap-2 px-5 py-1'
              onClick={handleDeleteImage}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 26'
                height='26'
                fill='none'
                width='26'
              >
                <path
                  d='M11.4375 3.625C11.0286 3.625 10.6105 3.76843 10.3145 4.06445C10.0184 4.36047 9.875 4.77856 9.875 5.1875V5.96875H4.40625V7.53125H5.26074L6.75 21.667L6.82324 22.375H19.1768L19.25 21.667L20.7393 7.53125H21.5938V5.96875H16.125V5.1875C16.125 4.77856 15.9816 4.36047 15.6855 4.06445C15.3895 3.76843 14.9714 3.625 14.5625 3.625H11.4375ZM11.4375 5.1875H14.5625V5.96875H11.4375V5.1875ZM6.84766 7.53125H19.1523L17.7607 20.8125H8.23926L6.84766 7.53125ZM9.875 9.875V18.4688H11.4375V9.875H9.875ZM12.2188 9.875V18.4688H13.7812V9.875H12.2188ZM14.5625 9.875V18.4688H16.125V9.875H14.5625Z'
                  fill='black'
                />
              </svg>
              <span className='text-base font-medium text-black'>Удалить</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 26'
                height='26'
                fill='none'
                width='26'
              >
                <path
                  d='M2.0625 4.40625V21.5938H23.9375V4.40625H2.0625ZM3.625 5.96875H22.375V16.833L18.249 12.6826L17.6875 12.1211L14.1475 15.6611L9.65527 11.1201L9.09375 10.5586L3.625 16.0273V5.96875ZM19.25 7.53125C18.3864 7.53125 17.6875 8.2301 17.6875 9.09375C17.6875 9.9574 18.3864 10.6562 19.25 10.6562C20.1136 10.6562 20.8125 9.9574 20.8125 9.09375C20.8125 8.2301 20.1136 7.53125 19.25 7.53125ZM9.09375 12.7803L16.2715 20.0312H3.625V18.249L9.09375 12.7803ZM17.6875 14.3428L22.375 19.0303V20.0312H18.4932L15.2461 16.7598L17.6875 14.3428Z'
                  fill='black'
                />
              </svg>
            </Button>
          ) : (
            <label className='flex cursor-pointer  gap-2 px-5 py-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 25 26'
                height='26'
                fill='none'
                width='25'
              >
                <path
                  d='M12.5 3.30762L11.9385 3.84473L6.46973 9.31348L7.59277 10.4365L11.7188 6.31055V19.25H13.2812V6.31055L17.4072 10.4365L18.5303 9.31348L13.0615 3.84473L12.5 3.30762ZM5.46875 20.8125V22.375H19.5312V20.8125H5.46875Z'
                  fill='black'
                />
              </svg>
              <span className='text-base font-medium text-black'>Загрузить</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 26'
                height='26'
                fill='none'
                width='26'
              >
                <path
                  d='M2.0625 4.40625V21.5938H23.9375V4.40625H2.0625ZM3.625 5.96875H22.375V16.833L18.249 12.6826L17.6875 12.1211L14.1475 15.6611L9.65527 11.1201L9.09375 10.5586L3.625 16.0273V5.96875ZM19.25 7.53125C18.3864 7.53125 17.6875 8.2301 17.6875 9.09375C17.6875 9.9574 18.3864 10.6562 19.25 10.6562C20.1136 10.6562 20.8125 9.9574 20.8125 9.09375C20.8125 8.2301 20.1136 7.53125 19.25 7.53125ZM9.09375 12.7803L16.2715 20.0312H3.625V18.249L9.09375 12.7803ZM17.6875 14.3428L22.375 19.0303V20.0312H18.4932L15.2461 16.7598L17.6875 14.3428Z'
                  fill='black'
                />
              </svg>

              <input
                onChange={handleAddImage}
                className='hidden'
                type='file'
              />
            </label>
          )}
        </div>
      )}
    </div>
  );
};
