import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header';

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
