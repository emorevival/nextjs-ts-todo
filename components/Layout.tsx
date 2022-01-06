import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import React from 'react';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='relative w-full overflow-x-hidden'>
      <div className='bg-red-300 top-32 bottom-32 left-20 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000' />
      <div className='bg-yellow-300 top-8 left-64 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000' />
      <div className='bg-cyan-300 top-56 right-96 left-32 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000' />
      <div className='bg-purple-300 top-52 left-60 w-72 h-72 absolute rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000' />
      <div className='min-h-[calc(100vh_-_3rem)] opacity-80 dark:opacity-90 relative bg-gray-200 dark:bg-slate-900 flex flex-col justify-center items-center gap-16 pb-7 transition duration-700'>
        <IconButton
          position='absolute'
          top='0px'
          className='m-3 dark:bg-slate-700'
          backgroundColor='#e5e7eb' //fuck it i cba to pull the entire configuration just for one colour
          right='0px'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label='Switch to between light and dark mode'
          icon={
            theme === 'dark' ? (
              <SunIcon className='dark:text-white' />
            ) : (
              <MoonIcon />
            )
          }
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
