import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';
import { LoginSchemaType } from '../schema/login';

import { userAction } from '@/entities/user';
import { AuthService } from '@/shared/services/auth';

const authService = new AuthService();

export const loginUser = createAsyncThunk(
  'session/loginUser',
  async (dataForm: LoginSchemaType, thunkApi) => {
    try {
      const { data } = await authService.logInUser({
        params: {
          email: dataForm.email,
          password: dataForm.password,
        },
      });

      thunkApi.dispatch(
        userAction.setUser({
          userData: {
            name: data.displayName,
            email: data.email,
            photoURL: data.profilePicture ?? null,
          },
        })
      );
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
