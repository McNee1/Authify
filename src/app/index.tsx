import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRouter } from './provider';

export const Provider = () => {
  const router = useRouter();

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
