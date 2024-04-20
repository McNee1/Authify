import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRouter } from './providers/router';
import { StoreProvider } from './providers/store-provider';
import { store } from './providers/store-provider/config/store';

import { interceptors } from '@/shared/config/axios/axios-instance';

interceptors(store);

export const Provider = () => {
  const router = useRouter();

  return (
    <StrictMode>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </StrictMode>
  );
};
