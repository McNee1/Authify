import { useLogIn } from '../../model/hooks/useLogIn';
import { useResetSessionError } from '../../model/hooks/useResetSessionError';

import { EmailIcon } from '@/shared/assets/icons/EmailIcon';
import { LockIcon } from '@/shared/assets/icons/LockIcon';
import {
  DEFAULT,
  DEFAULT_CLASS,
  ERROR,
  ERROR_CLASS,
  VALID,
  VALID_CLASS,
} from '@/shared/constant/classes';
import { applyClass } from '@/shared/lib/apply-class';
import { Button } from '@/shared/ui/button/Button';
import { CustomInput } from '@/shared/ui/input/Input';

export const LoginForm = () => {
  const { Controller, control, errors, handleSubmit, onSubmit, status } = useLogIn();

  const { error: loginError, handleResetError } = useResetSessionError();

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <div className='flex flex-col px-[4.5px]'>
        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              {...field}
              icon={
                <EmailIcon
                  fill={applyClass(
                    errors.email?.message ?? loginError,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.email?.message ?? loginError,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched
              )}
              onChange={(value) => {
                field.onChange(value);
                handleResetError();
              }}
              placeholder='email@test.com'
              errors={errors.email}
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
              icon={
                <LockIcon
                  fill={applyClass(
                    errors.password ?? loginError,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.password?.message ?? loginError,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
              errors={errors.password}
              placeholder='password'
              type='password'
              gap='mb-4'
              {...field}
              onChange={(value) => {
                field.onChange(value);
                handleResetError();
              }}
            />
          )}
          control={control}
          name='password'
        />
      </div>

      <Button
        className='w-full rounded-md bg-black py-[13px] font-medium text-white disabled:bg-neutral-300'
        disabled={status === 'pending'}
        type='submit'
      >
        Вход
      </Button>
    </form>
  );
};
