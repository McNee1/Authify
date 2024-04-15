import { ERROR_MESSAGE, ErrorMessage } from '../constant/error-message';

export const getErrorMessage = (error: string) => {
  const parts = error.split(':');
  const errorCode = parts[0].trim() as keyof ErrorMessage;
  if (ERROR_MESSAGE[errorCode]) {
    return ERROR_MESSAGE[errorCode];
  } else {
    return error;
  }
};
