import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

import { authReducer } from '@/entities/auth';
import { userReducer } from '@/entities/user';

export const store = configureStore<StateSchema>({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
