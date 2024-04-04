import { CreateUser } from '@/features/session/create';

export const RegistrationPage = () => {
  return (
    <div className='container m-auto'>
      <div className='m-auto max-w-[400px] rounded-[5px] border border-neutral-200 bg-white p-5 sm:p-7'>
        <h1 className='mb-6 text-3xl font-medium'>
          Регистрация в <br /> Lorem ipsum
        </h1>
        <CreateUser />
      </div>
    </div>
  );
};
