import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { LoginForm, selectSessionError, sessionAction } from '@/features/session';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';

export const LoginPage = () => {
  const error = useAppSelector(selectSessionError);
  const dispatch = useAppDispatch();

  return (
    <div className='container m-auto'>
      <div className='m-auto max-w-[400px]'>
        <div className='rounded-[5px] border border-neutral-200 bg-white p-5 sm:p-7'>
          <h1 className='mb-6 text-3xl font-medium'>Вход в Lorem ipsum</h1>
          <LoginForm />
        </div>
        <ErrorMessage
          onClick={() => dispatch(sessionAction.resetError())}
          round='rounded-md'
          className='mt-2'
          error={error}
        />
      </div>
    </div>
  );
};
