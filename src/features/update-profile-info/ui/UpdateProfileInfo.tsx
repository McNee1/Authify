import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx/lite';
import { updateSchema, UpdateSchemaType } from '../model/schema';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { User, userAction } from '@/entities/user';
import { selectAccessToken, selectUserId } from '@/features/session';
import { DEFAULT_CLASS, ERROR_CLASS, VALID_CLASS } from '@/shared/constant/input-class';
import { applyClass } from '@/shared/lib/apply-class';
import { AuthService } from '@/shared/services/auth';
import { ProfileService } from '@/shared/services/profile';
import { Button } from '@/shared/ui/button/Button';
import { CustomInput } from '@/shared/ui/input/Input';
import { Modal } from '@/shared/ui/modal/Modal';

interface UpdateProfileInfoProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onUpdateProfile: (data: User) => void;
  profileData: User | null;
}

export const UpdateProfileInfo = ({
  isOpenModal,
  onCloseModal,
  profileData,
  onUpdateProfile,
}: UpdateProfileInfoProps) => {
  const {
    control,
    handleSubmit,
    register,
    getFieldState,

    formState: { errors },
  } = useForm<UpdateSchemaType>({
    resolver: zodResolver(updateSchema),
    mode: 'onBlur',
    defaultValues: {
      userName: profileData?.name,
      email: profileData?.email,
      description: profileData?.description,
      imageUrl: profileData?.photoURL ?? '',
    },
  });
  useEffect(() => {
    console.log(profileData);
  }, [profileData]);
  const description = getFieldState('description');
  const dispatch = useAppDispatch();

  const uId = useAppSelector(selectUserId);
  const idToken = useAppSelector(selectAccessToken);

  const onSubmit: SubmitHandler<UpdateSchemaType> = async (dataForm, e) => {
    e?.preventDefault();

    const profileService = new ProfileService();
    const authService = new AuthService();

    if (!idToken || !uId) return;

    const data = await profileService.updateProfileInfo({
      params: {
        idToken: idToken,
        uId: uId,

        updatedInfo: {
          name: dataForm.userName,
          email: dataForm.email,
          photoURL: dataForm.imageUrl,
          description: dataForm.description,
        },
      },
    });

    console.log(data);

    const data1 = await authService.updateUserInfo({
      params: {
        idToken: idToken,
        email: dataForm.email,
        displayName: dataForm.userName,
        photoUrl: dataForm.imageUrl,
      },
    });
    onUpdateProfile({
      email: dataForm.email,
      name: dataForm.userName,
      photoURL: dataForm.imageUrl,
      description: dataForm.description,
    });
    dispatch(
      userAction.setUser({
        userData: {
          name: dataForm.userName,
          photoURL: dataForm.imageUrl,
          email: dataForm.email,
        },
      })
    );

    console.log(data1);
  };

  return (
    <Modal
      onClose={onCloseModal}
      isOpen={isOpenModal}
    >
      <div className='flex h-full w-full'>
        <div className='relative m-auto h-full w-full overflow-y-auto bg-white p-7 sm:max-h-[650px] sm:w-[600px] sm:rounded-md'>
          <div className='title mb-6 text-3xl font-medium'>Редактировать профиль</div>
          <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className='flex h-[calc(100%_-_108px)] flex-col'
          >
            <div className='mb-4'>
              <Controller
                render={({ field, fieldState }) => (
                  <>
                    <CustomInput
                      {...field}
                      className={applyClass(
                        errors.userName?.message,
                        ERROR_CLASS,
                        VALID_CLASS,
                        fieldState.isTouched,
                        DEFAULT_CLASS
                      )}
                      labelClassName='mb-1 block font-medium text-zinc-500'
                      errors={errors.userName}
                      placeholder='Name'
                      type='text'
                      label='Имя'
                      gap='mb-4'
                      id='name'
                    />
                  </>
                )}
                control={control}
                name='userName'
              />
              <Controller
                render={({ field, fieldState }) => (
                  <CustomInput
                    id='email'
                    {...field}
                    className={applyClass(
                      errors.email?.message,
                      ERROR_CLASS,
                      VALID_CLASS,
                      fieldState.isTouched,
                      DEFAULT_CLASS
                    )}
                    labelClassName='mb-1 block font-medium text-zinc-500'
                    placeholder='email@test.com'
                    errors={errors.email}
                    label='Email адрес'
                    type='text'
                    gap='mb-4'
                  />
                )}
                control={control}
                name='email'
              />

              <Controller
                render={({ field, fieldState }) => (
                  <CustomInput
                    id='img'
                    {...field}
                    className={applyClass(
                      errors.imageUrl?.message,
                      ERROR_CLASS,
                      VALID_CLASS,
                      fieldState.isTouched,
                      DEFAULT_CLASS
                    )}
                    labelClassName='mb-1 block font-medium text-zinc-500'
                    label='URL картинки профиля'
                    placeholder='www.image.com'
                    errors={errors.imageUrl}
                    type='text'
                    gap='mb-4'
                  />
                )}
                control={control}
                name='imageUrl'
              />

              <div className='mb-4'>
                <label
                  className='mb-1 block font-medium text-zinc-500'
                  htmlFor='description'
                >
                  Описание
                </label>
                <textarea
                  id='description'
                  rows={4}
                  {...register('description')}
                  className={clsx(
                    applyClass(
                      errors.description?.message,
                      ERROR_CLASS,
                      VALID_CLASS,
                      description.isTouched,
                      DEFAULT_CLASS
                    ),
                    'm-0 w-full rounded-md border p-3 text-black focus:outline-none'
                  )}
                  placeholder='Lorem ipsum dolor sit amet consectetur...'
                />
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <Button
                className='w-full max-w-[265px] rounded-[5px] border border-zinc-500 bg-white py-3 text-base font-medium text-black'
                onClick={onCloseModal}
                type='button'
              >
                Отмена
              </Button>
              <Button
                className='w-full max-w-[265px] rounded-[5px] border border-zinc-500 bg-black py-3 text-base font-medium text-white disabled:border-neutral-300 disabled:bg-neutral-300'
                type='submit'
              >
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
