import { CreateUser } from '@/features/session/create';

export const RegistrationPage = () => {
  return (
    <div className='container m-auto'>
      <div className='p-5 sm:p-7 m-auto bg-white max-w-[400px] rounded-[5px] border border-neutral-200'>
        <h1 className='text-3xl font-medium mb-6'>
          Регистрация в <br /> Lorem ipsum
        </h1>
        <CreateUser />
      </div>
    </div>
  );
};
