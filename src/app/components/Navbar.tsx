import React from 'react';
import { MenuLinks } from '../db';

function Navbar() {
  return (
    <div className='hidden lg:flex flex-row justify-start items-center space-x-7 bg-white dark:bg-black w-full px-12 py-4'>
      {MenuLinks.map((link, index) => (
        <div
          key={index}
          className='text-gray-800 dark:text-white text-base font-medium cursor-pointer'
        >
          {link}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
