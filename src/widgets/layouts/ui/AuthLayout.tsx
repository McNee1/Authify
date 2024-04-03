import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <main className='bg-zinc-100 flex'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
