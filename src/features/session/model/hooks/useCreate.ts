import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { createSchema, CreateSchemaType } from '../schema/create';
import { createUserThunk } from '../service/create-user';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppDispatch } from '@/app/providers/store-provider';

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

  const onSubmit: SubmitHandler<CreateSchemaType> = async (dataForm) => {
    await dispatch(
      createUserThunk({
        email: dataForm.email,
        password: dataForm.password,
        userName: dataForm.userName,
      })
    );

    navigate(PATH_ROUTER.MAIN);
  };

  return { onSubmit, errors, control, handleSubmit, Controller };
};
