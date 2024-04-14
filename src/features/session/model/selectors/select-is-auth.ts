import { createSelector } from '@reduxjs/toolkit';
import { selectAccessToken } from './select-access-token';

export const selectIsAuth = createSelector(selectAccessToken, (idToken) => !!idToken);
