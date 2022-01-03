import React from 'react';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='min-h-[calc(100vh_-_3rem)] relative bg-gray-900 flex flex-col justify-center items-center gap-16 pb-7'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
