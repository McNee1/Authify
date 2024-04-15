import { RootState } from '@/app/providers/store-provider';

export const selectSessionError = (state: RootState) => state.session.error;
