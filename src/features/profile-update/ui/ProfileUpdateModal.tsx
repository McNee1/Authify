import { Controller } from 'react-hook-form';
import clsx from 'clsx/lite';
import { useFetchProfileInfo } from '../model/hook/use-fetch-profile-info';

import { User } from '@/entities/user';
import { DEFAULT_CLASS, ERROR_CLASS, VALID_CLASS } from '@/shared/constant/input-class';
import { applyClass } from '@/shared/lib/apply-class';
import { Button } from '@/shared/ui/button/Button';
import { FormField } from '@/shared/ui/form-field/FormField';
import { Modal } from '@/shared/ui/modal/Modal';
import { TextArea } from '@/shared/ui/text-area/TextArea';

interface ProfileUpdateModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onUpdateProfile: (data: User) => void;
  profileData: User | null;
}

export const ProfileUpdateModal = ({
  isOpenModal,
  onCloseModal,
  profileData,
  onUpdateProfile,
}: ProfileUpdateModalProps) => {
  const { onSubmit, control, errors, handleSubmit } = useFetchProfileInfo(
    profileData,
    onUpdateProfile
  );
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
                    <FormField
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
                  <FormField
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
                  <FormField
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
                <Controller
                  render={({ field, fieldState }) => (
                    <TextArea
                      {...field}
                      className={clsx(
                        applyClass(
                          errors.description?.message,
                          ERROR_CLASS,
                          VALID_CLASS,
                          fieldState.isTouched,
                          DEFAULT_CLASS
                        ),
                        'm-0 w-full rounded-md border p-3 text-black focus:outline-none'
                      )}
                      placeholder='Lorem ipsum dolor sit amet consectetur...'
                      labelClassName='mb-1 block font-medium text-zinc-500'
                      label='Описание'
                      id='description'
                      rows={4}
                    />
                  )}
                  name='description'
                  control={control}
                />
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <Button
                className='w-full max-w-[265px] py-3'
                onClick={onCloseModal}
                variant='light'
                type='button'
              >
                Отмена
              </Button>
              <Button
                className='max-w-[265px w-full py-3'
                variant='dark'
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
