import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth, AuthSchema } from '../types/auth';

import { localStorageManager } from '@/shared/lib/local-storage-manager';

const LC = localStorageManager();

const initialState: AuthSchema = {
  authData: LC.get('session') as Auth | null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthSchema>) => {
      state.authData = action.payload.authData;
      LC.set('session', { ...action.payload.authData });
    },
    logout: (state) => {
      state.authData = null;
      LC.remove('session');
    },
  },
});

export const { actions: authAction } = authSlice;
export const { reducer: authReducer } = authSlice;
