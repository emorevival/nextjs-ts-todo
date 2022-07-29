import React from 'react';

const Footer = () => {
  return (
    <footer className='flex inset-x-0 sticky bg-gray-200 dark:bg-slate-900 opacity-90 h-12 items-center justify-center text-center text-black dark:text-white transition duration-700'>
      <p>
        Made by{' '}
        <a
          className='text-gray-700 dark:text-gray-400 hover:underline hover:underline-offset-4'
          href='https://github.com/emorevival/nextjs-ts-todo'>
          Branko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
