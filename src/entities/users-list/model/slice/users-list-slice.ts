import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../service/get-all-users';
import { UsersListSchema } from '../types/users-list.type';

const initialState: UsersListSchema = {
  usersList: null,
  error: null,
  status: 'idle',
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, actions) => {
        if (actions.payload) {
          state.error = actions.payload;
        }
        state.status = 'failed';
      })
      .addCase(getAllUsers.fulfilled, (state, { payload: usersList }) => {
        state.usersList = usersList;
        state.status = 'succeeded';
        state.error = null;
      });
  },
});

export const { actions: usersListAction } = usersListSlice;
export const { reducer: usersListReducer } = usersListSlice;
