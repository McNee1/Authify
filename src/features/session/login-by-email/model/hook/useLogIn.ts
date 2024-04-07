import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type SchemaType } from '../schema/zod';

import { PATH_ROUTER } from '@/app/provider';
import { AuthService } from '@/shared/services/auth';

const authService = new AuthService();

export const useLogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SchemaType> = async (dataForm) => {
    try {
      const { status, data } = await authService.logInUser({
        params: {
          email: dataForm.email,
          password: dataForm.password,
        },
      });
      if (status === 200 && data.idToken) {
        navigate(PATH_ROUTER.MAIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { control, errors, handleSubmit, onSubmit, Controller };
};
