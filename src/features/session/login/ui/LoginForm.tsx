import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { CustomInput } from '@/shared/ui/input/Input';

interface FormSchema {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data): void => {
    console.log(data);
  };
  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <div className='flex flex-col px-[4.5px]'>
        <Controller
          render={({ field }) => (
            <CustomInput
              {...field}
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  height='25'
                  fill='none'
                  width='25'
                >
                  <path
                    d='M2.34375 6.25V20.3125H22.6562V6.25H2.34375ZM5.71289 7.8125H19.2871L12.5 12.3291L5.71289 7.8125ZM3.90625 8.49609L12.0605 13.9404L12.5 14.209L12.9395 13.9404L21.0938 8.49609V18.75H3.90625V8.49609Z'
                    fill='black'
                  />
                </svg>
              }
              placeholder='email@test.com'
              type='email'
              gap='mb-4'
            />
          )}
          control={control}
          name='email'
        />

        <Controller
          render={({ field }) => (
            <CustomInput
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  height='25'
                  fill='none'
                  width='25'
                >
                  <path
                    d='M12.5 2.34375C9.49707 2.34375 7.03125 4.80957 7.03125 7.8125V10.1562H4.6875V22.6562H20.3125V10.1562H17.9688V7.8125C17.9688 4.80957 15.5029 2.34375 12.5 2.34375ZM12.5 3.90625C14.6515 3.90625 16.4062 5.66101 16.4062 7.8125V10.1562H8.59375V7.8125C8.59375 5.66101 10.3485 3.90625 12.5 3.90625ZM6.25 11.7188H18.75V21.0938H6.25V11.7188Z'
                    fill='black'
                  />
                </svg>
              }
              placeholder='password'
              type='password'
              gap='mb-4'
              {...field}
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
        Вход
      </button>
    </form>
  );
};
