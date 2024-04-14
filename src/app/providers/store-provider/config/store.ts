import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

import { userReducer } from '@/entities/user';
import { usersListReducer } from '@/entities/users-list';
import { sessionReducer } from '@/features/session/model/slice/session-slice';

export const store = configureStore<StateSchema>({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    users: usersListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
