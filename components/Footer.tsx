import React from 'react';

const Footer = () => {
  return (
    <footer className='flex absolute inset-0 top-auto bg-gray-800 w-full h-12 items-center justify-center text-center text-white'>
      <p>
        Made by{' '}
        <a
          className='text-gray-500 hover:underline hover:underline-offset-4'
          href='https://github.com/emorevival/nextjs-ts-todo'>
          Branko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
