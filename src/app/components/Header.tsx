'use client';

import React, { useState } from 'react';
import { Icons } from '../assets/icons';
import Image from 'next/image';

const Header = () => {
  const MenuLinks = [
    'Stock Video',
    'Video Templates',
    'Music',
    'Sound Effects',
    'Graphic Templates',
    'Graphics',
    'Photos',
    'Fonts',
    'Add-Ons',
    'More',
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex flex-col justify-between items-start w-full sticky top-0 border-b border-gray-200'>
      <div className='flex flex-row py-4 w-full justify-between items-center px-12 bg-white dark:bg-black'>
        <div className='w-[30%]'>
          <Image src={Icons.LogoMain} alt='Zin' width={105} height={50} />
        </div>
        <div className='relative w-[40%]'>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search for themes,tools and other stuff ...'
            required
          />
          <div className='absolute inset-y-0 end-0 mr-5 flex items-center ps-3 pointer-events-none'>
            <Image src={Icons.SearchIcon} alt='Search' />
          </div>
        </div>
        <div className='flex items-center space-x-4 w-[30%] justify-end'>
          <button className='text-black dark:text-white px-4 py-2 '>
            Log in
          </button>
          <button className='text-white px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none'>
            Signup
          </button>
        </div>
      </div>
      <div className='hidden lg:flex flex-row justify-start items-center space-x-10 bg-white dark:bg-black w-full px-10 py-4'>
        {MenuLinks.map((link, index) => (
          <div
            key={index}
            className='text-gray-800 dark:text-white text-base font-medium cursor-pointer'
          >
            {link}
          </div>
        ))}
      </div>

      <div
        className={`w-full px-10 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        {MenuLinks.map((link, index) => (
          <div
            key={index}
            className='text-gray-800 dark:text-white text-base font-medium cursor-pointer'
          >
            {link}
          </div>
        ))}
      </div>

      <div className='md:hidden px-4'>
        <button
          className='text-gray-800 dark:text-white'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>
    </div>
  );
};

export default Header;
