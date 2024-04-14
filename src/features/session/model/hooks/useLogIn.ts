import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '../schema/login';
import { loginUser } from '../service/login-user';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppDispatch } from '@/app/providers/store-provider';

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

  const onSubmit: SubmitHandler<LoginSchemaType> = async (dataForm) => {
    await dispatch(
      loginUser({
        email: dataForm.email,
        password: dataForm.password,
      })
    );

    navigate(PATH_ROUTER.MAIN);
  };

  return { control, errors, handleSubmit, onSubmit, Controller };
};
