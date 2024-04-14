import { RootState } from '@/app/providers/store-provider';

export const selectRefreshToken = (state: RootState) =>
  state.session.sessionData?.refreshToken ?? null;
