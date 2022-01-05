import React from 'react';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='relative w-full'>
      <div className='bg-red-300 top-32 bottom-32 left-20 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000' />
      <div className='bg-yellow-300 top-8 left-64 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000' />
      <div className='bg-cyan-300 top-56 right-96 left-32 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000' />
      <div className='bg-purple-300 top-52 left-60 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000' />
      <div className='min-h-[calc(100vh_-_3rem)] opacity-90 relative bg-slate-900 flex flex-col justify-center items-center gap-16 pb-7'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
