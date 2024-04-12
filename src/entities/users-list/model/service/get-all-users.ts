import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';

import { User } from '@/entities/user/model/types/user.type';
import { UsersService } from '@/shared/services/users';

const usersService = new UsersService();

export const getAllUsers = createAsyncThunk<
  User[],
  { idToken: string },
  { rejectValue: string }
>('usersList/getAllUsers', async (params, thunkApi) => {
  try {
    const { data } = await usersService.getAllUsers({
      params: { idToken: params.idToken },
    });
    const formattedData = Object.keys(data).map((user) => data[user]);

    return formattedData;
  } catch (err) {
    const error = err as Error | AxiosError;

    if (isAxiosError(error)) {
      return thunkApi.rejectWithValue(error.message);
    } else {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
