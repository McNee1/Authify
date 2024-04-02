import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { CustomInput } from '@/shared/ui/input/Input';

interface CreationFormeSchema {
  email: string;
  name: string;
  password: string;
}

export const CreateUser = () => {
  const { control, handleSubmit } = useForm<CreationFormeSchema>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<CreationFormeSchema> = (data): void => {
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
                    d='M12.5 3.90625C9.48792 3.90625 7.03125 6.36291 7.03125 9.375C7.03125 11.2579 7.99255 12.9303 9.44824 13.916C6.66199 15.1123 4.6875 17.8772 4.6875 21.0938H6.25C6.25 17.6331 9.03931 14.8438 12.5 14.8438C15.9607 14.8438 18.75 17.6331 18.75 21.0938H20.3125C20.3125 17.8772 18.338 15.1123 15.5518 13.916C17.0074 12.9303 17.9688 11.2579 17.9688 9.375C17.9688 6.36291 15.5121 3.90625 12.5 3.90625ZM12.5 5.46875C14.6667 5.46875 16.4062 7.20825 16.4062 9.375C16.4062 11.5417 14.6667 13.2812 12.5 13.2812C10.3333 13.2812 8.59375 11.5417 8.59375 9.375C8.59375 7.20825 10.3333 5.46875 12.5 5.46875Z'
                    fill='black'
                  />
                </svg>
              }
              placeholder='Name'
              type='text'
              gap='mb-4'
            />
          )}
          control={control}
          name='email'
        />
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
        Создать аккаунт
      </button>
    </form>
  );
};
