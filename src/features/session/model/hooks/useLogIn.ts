import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '../schema/login';
import { selectSessionStatus } from '../selectors/select-session-status';
import { loginUserThank } from '../service/login-user';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';

export const useLogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectSessionStatus);

  const onSubmit: SubmitHandler<LoginSchemaType> = async (dataForm) => {
    await dispatch(
      loginUserThank({
        email: dataForm.email,
        password: dataForm.password,
      })
    );
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate(PATH_ROUTER.MAIN);
    }
  }, [navigate, status]);

  return { control, errors, handleSubmit, onSubmit, Controller, status };
};
