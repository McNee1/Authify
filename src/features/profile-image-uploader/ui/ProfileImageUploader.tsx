import SVG from 'react-inlinesvg';
import { useAddImage } from '../model/hooks/use-add-image';
import { useDeleteImage } from '../model/hooks/use-delete-image';
import { useFetchImage } from '../model/hooks/use-fetch-image';

import arrowIcon from '/src/shared/assets/icons/arrow.svg';
import pictureIcon from '/src/shared/assets/icons/picture.svg';
import trashCanIcon from '/src/shared/assets/icons/trashCan.svg';
import { useAppSelector } from '@/app/providers/store-provider';
import { selectAccessToken } from '@/features/session';
import { Rule } from '@/pages/profile-page';
import { OWNER } from '@/shared/constant/common';
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
              <SVG src={trashCanIcon} />
              <span className='text-base font-medium text-black'>Удалить</span>
              <SVG src={pictureIcon} />
            </Button>
          ) : (
            <label className='flex cursor-pointer  gap-2 px-5 py-1'>
              <SVG src={arrowIcon} />
              <span className='text-base font-medium text-black'>Загрузить</span>
              <SVG src={pictureIcon} />

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
