import { RootState } from '@/app/providers/store-provider';

export const selectAccessToken = (state: RootState) =>
  state.session.sessionData?.idToken ?? null;
