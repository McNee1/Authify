import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

import { userReducer } from '@/entities/user';
import { sessionReducer } from '@/features/session';

export const store = configureStore<StateSchema>({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
