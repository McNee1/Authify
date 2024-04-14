import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';
import { CreateSchemaType } from '../schema/create';

import { userAction } from '@/entities/user';
import { AuthService } from '@/shared/services/auth';
import { UsersService } from '@/shared/services/users';

const authService = new AuthService();
const usersService = new UsersService();

export const createUserThunk = createAsyncThunk(
  'session/createUser',
  async (dataForm: CreateSchemaType, thunkApi) => {
    try {
      const { data } = await authService.createUser({
        params: {
          email: dataForm.email,
          password: dataForm.password,
        },
      });

      thunkApi.dispatch(
        userAction.setUser({
          userData: {
            name: dataForm.userName,
            email: dataForm.email,
            photoURL: null,
          },
        })
      );

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

      return data;
    } catch (err) {
      const error = err as Error | AxiosError;
      console.log(err);
      if (isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);
