import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { EmailIcon } from '@/shared/assets/icons/EmailIcon';
import { LockIcon } from '@/shared/assets/icons/LockIcon';
import { PersonIcon } from '@/shared/assets/icons/PersonIcon';
import {
  DEFAULT,
  DEFAULT_CLASS,
  ERROR,
  ERROR_CLASS,
  VALID,
  VALID_CLASS,
} from '@/shared/constant/classes';
import { applyClass } from '@/shared/lib/apply-class';
import { CustomInput } from '@/shared/ui/input/Input';

const schema = z.object({
  userName: z
    .string()
    .min(4, { message: 'Name must contain at least 5 character(s)' })
    .max(20)
    .trim(),
  email: z
    .string()
    .email()
    .min(7, { message: 'Email must contain at least 7 character(s)' })
    .max(20)
    .trim(),
  password: z
    .string()
    .min(5, { message: 'Password must contain at least 5 character(s)' })
    .max(30)
    .trim(),
});

type Schema = z.infer<typeof schema>;

export const CreateUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data): void => {
    console.log(data);
  };
  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <div className='flex flex-col px-[4.5px]'>
        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              {...field}
              icon={
                <PersonIcon
                  fill={applyClass(
                    errors.userName?.message,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.userName?.message,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
              errors={errors.userName}
              placeholder='Name'
              type='text'
              gap='mb-4'
            />
          )}
          control={control}
          name='userName'
        />
        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              {...field}
              icon={
                <EmailIcon
                  fill={applyClass(
                    errors.email?.message,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.email?.message,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
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
                    errors.password?.message,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              errors={errors.password}
              placeholder='password'
              type='password'
              gap='mb-4'
              {...field}
              className={applyClass(
                errors.password?.message,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
            />
          )}
          control={control}
          name='password'
        />
      </div>

      <button
        className='disabled:bg-neutral-300 w-full disabled:text-white bg-black text-white font-medium rounded-md py-[13px]'
        type='submit'
      >
        Создать аккаунт
      </button>
    </form>
  );
};
