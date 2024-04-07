import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type SchemaType } from '../schema/zod';

import { PATH_ROUTER } from '@/app/provider';
import { AuthService } from '@/shared/services/auth';
import { UsersService } from '@/shared/services/users';

const authService = new AuthService();
const usersService = new UsersService();

export const useCreateUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SchemaType> = async (dataForm) => {
    console.log(dataForm);
    try {
      const { status, data } = await authService.createUser({
        params: {
          email: dataForm.email,
          password: dataForm.password,
        },
      });

      if (status === 200) {
        await authService.updateUserInfo({
          params: {
            displayName: dataForm.userName,
            idToken: data.idToken,
          },
        });

        await usersService.addUserToDatabase({
          params: {
            name: dataForm.userName,
            email: dataForm.email,
            idToken: data.idToken,
            uId: data.localId,
          },
        });

        navigate(PATH_ROUTER.MAIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit, errors, control, handleSubmit, Controller };
};
