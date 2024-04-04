import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <main className='flex bg-zinc-100'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
