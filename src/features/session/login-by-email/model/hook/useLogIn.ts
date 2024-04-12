import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type SchemaType } from '../schema/zod';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppDispatch } from '@/app/providers/store-provider';
import { authAction } from '@/entities/auth';
import { userAction } from '@/entities/user';
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
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SchemaType> = async (dataForm) => {
    try {
      const { status, data } = await authService.logInUser({
        params: {
          email: dataForm.email,
          password: dataForm.password,
        },
      });
      if (status === 200 && data.idToken) {
        dispatch(
          authAction.setAuth({
            authData: {
              idToken: data.idToken,
              uId: data.localId,
              refreshToken: data.refreshToken,
            },
          })
        );
        console.log(data);
        dispatch(
          userAction.setUser({
            userData: {
              name: data.displayName,
              photoURL: data.profilePicture ?? null,
            },
          })
        );
        navigate(PATH_ROUTER.MAIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { control, errors, handleSubmit, onSubmit, Controller };
};
