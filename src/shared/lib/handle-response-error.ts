import { Dispatch, SetStateAction } from 'react';
import { isAxiosError } from 'axios';

export const handleResponseError = <T>(
  error: T,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  if (isAxiosError(error)) {
    const { response } = error;
    if (response) {
      const errorMessage = `HTTP Error: ${error.message}`;
      setError(errorMessage);
      console.error('Response Data:', error);
    }
  } else {
    const e = error as Error;
    setError(e.message);
    console.error('Error:', e);
  }
};
