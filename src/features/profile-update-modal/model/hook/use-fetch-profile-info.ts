import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { updateSchema, UpdateSchemaType } from '../schema';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { User, userAction } from '@/entities/user';
import { selectAccessToken, selectUserId, sessionAction } from '@/features/session';
import { useLogout } from '@/features/session/model/hooks/useLogout';
import { CustomErrorResponse } from '@/features/session/model/types/error-response.type';
import { AuthService } from '@/shared/services/auth';
import { UsersService } from '@/shared/services/users';

export const useFetchProfileInfo = (
  profileData: User | null,
  onUpdateProfile: (data: User) => void
) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateSchemaType>({
    resolver: zodResolver(updateSchema),
    mode: 'onBlur',
    defaultValues: {
      userName: profileData?.name,
      email: profileData?.email,
      description: profileData?.description ?? '',
      imageUrl: profileData?.photoURL ?? '',
    },
  });

  const dispatch = useAppDispatch();
  const { handleLogout } = useLogout();

  const uId = useAppSelector(selectUserId);
  const idToken = useAppSelector(selectAccessToken);

  const onSubmit: SubmitHandler<UpdateSchemaType> = async (dataForm, e) => {
    e?.preventDefault();

    const usersService = new UsersService();
    const authService = new AuthService();

    if (!idToken || !uId) return;

    try {
      const { status } = await authService.updateProfile({
        params: {
          idToken: idToken,
          email: dataForm.email,
          displayName: dataForm.userName,
          photoUrl: dataForm.imageUrl,
        },
      });
      if (status !== 200) return;

      const data = {
        name: dataForm.userName,
        photoURL: dataForm.imageUrl,
        email: dataForm.email,
      };

      await usersService.updateUserInfo({
        params: {
          idToken: idToken,
          uId: uId,

          updatedInfo: {
            ...data,
            description: dataForm.description,
          },
        },
      });

      onUpdateProfile({
        ...data,
        description: dataForm.description,
      });

      dispatch(
        userAction.setUser({
          userData: {
            ...data,
          },
        })
      );
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      if (err.response?.data.error.code === 400) {
        handleLogout();
        dispatch(sessionAction.setError(err.response.data.error.message));
      }
    }
  };

  return { errors, onSubmit, control, handleSubmit };
};
