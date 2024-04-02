import { LoginForm } from '@/features/session/login';

export const LoginPage = () => {
  return (
    <div className='container m-auto'>
      <div className='p-5 sm:p-7 m-auto bg-white max-w-[400px] rounded-[5px] border border-neutral-200'>
        <h1 className='text-3xl font-medium mb-6'>Вход в Lorem ipsum</h1>
        <LoginForm />
      </div>
    </div>
  );
};
