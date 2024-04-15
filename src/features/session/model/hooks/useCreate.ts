import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { createSchema, CreateSchemaType } from '../schema/create';
import { selectSessionStatus } from '../selectors/select-session-status';
import { createUserThunk } from '../service/create-user';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';

export const useCreateUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSchemaType>({
    resolver: zodResolver(createSchema),
    mode: 'all',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectSessionStatus);

  const onSubmit: SubmitHandler<CreateSchemaType> = async (dataForm) => {
    await dispatch(
      createUserThunk({
        email: dataForm.email,
        password: dataForm.password,
        userName: dataForm.userName,
      })
    );
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate(PATH_ROUTER.MAIN);
    }
  }, [navigate, status]);

  return { onSubmit, errors, control, handleSubmit, Controller, status };
};
