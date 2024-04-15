import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { CreateUser, selectSessionError, sessionAction } from '@/features/session';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';

export const RegistrationPage = () => {
  const error = useAppSelector(selectSessionError);
  const dispatch = useAppDispatch();

  return (
    <div className='container m-auto'>
      <div className='m-auto max-w-[400px] rounded-[5px] border border-neutral-200 bg-white p-5 sm:p-7'>
        <h1 className='mb-6 text-3xl font-medium'>
          Регистрация в <br /> Lorem ipsum
        </h1>
        <CreateUser />
        <ErrorMessage
          onClick={() => dispatch(sessionAction.resetError())}
          error={error}
        />
      </div>
    </div>
  );
};
