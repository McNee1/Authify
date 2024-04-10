import { createSelector } from '@reduxjs/toolkit';
import { selectAuth } from './select-auth';

export const selectIsAuth = createSelector(selectAuth, (state) => !!state?.idToken);
