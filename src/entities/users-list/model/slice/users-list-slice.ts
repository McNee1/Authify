import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../service/get-all-users';
import { UsersListSchema } from '../types/users-list.type';

const initialState: UsersListSchema = {
  usersList: null,
  error: null,
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, { payload: usersList }) => {
        state.usersList = usersList;
      })
      .addCase(getAllUsers.rejected, (state, actions) => {
        if (actions.payload) {
          state.error = actions.payload;
        }
      });
  },
});

export const { actions: usersListAction } = usersListSlice;
export const { reducer: usersListReducer } = usersListSlice;
