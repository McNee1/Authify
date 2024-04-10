import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

import { localStorageManager } from '@/shared/lib/local-storage-manager';

const LC = localStorageManager();

const initialState: UserSchema = {
  userData: LC.get('user') as User | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSchema>) => {
      state.userData = action.payload.userData;

      LC.set('user', {
        name: action.payload.userData?.name,
        photoURL: action.payload.userData?.photoURL,
      } as User);
    },
    deleteUser: (state) => {
      state.userData = null;
      LC.remove('user');
    },
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
