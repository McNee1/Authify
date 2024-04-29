import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserThunk } from '../service/create-user';
import { loginUserThank } from '../service/login-user';
import { Session, SessionSchema, UpdateSession } from '../types/session.type';

import { getErrorMessage } from '@/shared/lib/get-error-message';
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
    resetError: (state) => {
      state.error = null;
    },
    updateSession: (state, { payload }: PayloadAction<UpdateSession>) => {
      const sessionData = {
        idToken: payload.access_token,
        refreshToken: payload.refresh_token,
        uId: payload.user_id,
      } as Session;

      state.sessionData = sessionData;
      LC.set('session', sessionData);
    },
    logout: (state) => {
      state.sessionData = null;
      LC.remove('session');
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      console.log(payload);
      state.error = getErrorMessage(payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserThank.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(loginUserThank.fulfilled, (state, { payload }) => {
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
      .addCase(loginUserThank.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = getErrorMessage(action.payload);
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
      .addCase(createUserThunk.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = getErrorMessage(action.payload);
        }
        state.status = 'failed';
      });
  },
});

export const { actions: sessionAction } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
