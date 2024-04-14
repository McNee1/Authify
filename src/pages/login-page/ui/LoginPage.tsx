import { LoginForm } from '@/features/session';

export const LoginPage = () => {
  return (
    <div className='container m-auto'>
      <div className='m-auto max-w-[400px] rounded-[5px] border border-neutral-200 bg-white p-5 sm:p-7'>
        <h1 className='mb-6 text-3xl font-medium'>Вход в Lorem ipsum</h1>
        <LoginForm />
      </div>
    </div>
  );
};
