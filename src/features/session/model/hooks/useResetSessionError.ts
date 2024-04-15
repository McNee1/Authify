import { selectSessionError } from '../selectors/select-session-error';
import { sessionAction } from '../slice/session-slice';

import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';

export const useResetSessionError = () => {
  const error = useAppSelector(selectSessionError);

  const dispatch = useAppDispatch();

  const handleResetError = () => {
    if (error) {
      dispatch(sessionAction.resetError());
    }
  };
  return { handleResetError, error };
};
