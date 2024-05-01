import { useLogIn } from '../../model/hooks/useLogIn';
import { useResetSessionError } from '../../model/hooks/useResetSessionError';

import {
  DEFAULT,
  DEFAULT_CLASS,
  ERROR,
  ERROR_CLASS,
  VALID,
  VALID_CLASS,
} from '@/shared/constant/input-class';
import { applyClass } from '@/shared/lib/apply-class';
import { Button } from '@/shared/ui/button/Button';
import { FormField } from '@/shared/ui/form-field/FormField';
import { EmailIcon } from '@/shared/ui/icons/EmailIcon';
import { LockIcon } from '@/shared/ui/icons/LockIcon';

export const LoginForm = () => {
  const { Controller, control, errors, handleSubmit, onSubmit, status } = useLogIn();

  const { error: loginError, handleResetError } = useResetSessionError();

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <div className='flex flex-col px-[4.5px]'>
        <Controller
          render={({ field, fieldState }) => (
            <FormField
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
                errors.email?.message ?? null,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
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
            <FormField
              icon={
                <LockIcon
                  fill={applyClass(
                    errors.password?.message ?? loginError,
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
        disabled={status === 'pending'}
        className='w-full py-[13px]'
        variant='dark'
        type='submit'
      >
        Вход
      </Button>
    </form>
  );
};
