import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='flex bg-zinc-100'>
        <Outlet />
      </main>
    </>
  );
};
