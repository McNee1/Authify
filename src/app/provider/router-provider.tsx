import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login-page';
import { RegistrationPage } from '@/pages/registration-page';

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'registration',
          element: <RegistrationPage />,
        },
      ],
    },
  ]);

  return router;
};
