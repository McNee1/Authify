import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserThunk } from '../service/create-user';
import { loginUser } from '../service/login-user';
import { Session, SessionSchema } from '../types/session.type';

import { localStorageManager } from '@/shared/lib/local-storage-manager';

const LC = localStorageManager();

const initialState: SessionSchema = {
  sessionData: LC.get('session') as Session | null,
  error: null,
  status: 'idle',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<SessionSchema>) => {
      state.sessionData = action.payload.sessionData;
      LC.set('session', { ...action.payload.sessionData });
    },
    logout: (state) => {
      state.sessionData = null;
      LC.remove('session');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const sessionData = {
          idToken: payload.idToken,
          refreshToken: payload.refreshToken,
          uId: payload.localId,
        } as Session;

        LC.set('session', sessionData);

        state.sessionData = sessionData;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, actions) => {
        console.log(actions);
        if (actions.payload) {
          state.error = actions.payload as string;
        }
        state.status = 'failed';
      });
    builder
      .addCase(createUserThunk.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(createUserThunk.fulfilled, (state, { payload }) => {
        const sessionData = {
          idToken: payload.idToken,
          refreshToken: payload.refreshToken,
          uId: payload.localId,
        } as Session;

        LC.set('session', sessionData);

        state.sessionData = sessionData;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(createUserThunk.rejected, (state, actions) => {
        console.log(actions);
        if (actions.payload) {
          state.error = actions.payload as string;
        }
        state.status = 'failed';
      });
  },
});

export const { actions: sessionAction } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
