import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

import { userReducer } from '@/entities/auth';

export const store = configureStore<StateSchema>({
  reducer: {
    auth: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
