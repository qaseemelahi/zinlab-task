'use client';

import React, { useState } from 'react';
import { Icons } from '../assets/icons';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
import { MenuLinks } from '../db';
import Navbar from './Navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='flex flex-col justify-between items-start w-full sticky top-0 z-10 drop-shadow-sm'>
      <div className='flex flex-row py-4 w-full justify-between items-center px-4  lg:px-12 bg-white dark:bg-black'>
        <div className='w-[10%] flex lg:hidden'>
          <button onClick={toggleMenu}>
            <div className='flex dark:hidden'>
              <Image src={Icons.MenuIcon} alt='Zin' width={20} height={20} />
            </div>
            <div className='hidden dark:flex'>
              <Image src={Icons.WhiteMenu} alt='Zin' width={20} height={20} />
            </div>
          </button>
        </div>
        <div className='w-[80%] lg:w-[30%]'>
          <Image src={Icons.LogoMain} alt='Zin' width={150} height={70} />
        </div>
        <div className='hidden lg:flex relative w-[40%]'>
          <input
            type='search'
            id='default-search'
            className='block w-full px-6 py-4  text-sm text-gray-900  rounded-full bg-[#F2F2F2] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search for Movies,TV Shows,Themes & Cast'
            required
          />
          <div className='absolute inset-y-0 end-0 mr-5 flex items-center ps-3 pointer-events-none'>
            <Image src={Icons.SearchIcon} alt='Search' />
          </div>
        </div>
        <div className='hidden lg:flex items-center space-x-4 w-[30%] justify-end'>
          <button className='text-black dark:text-white px-4 py-2 '>
            Log in
          </button>
          <button className='text-white px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none'>
            Signup
          </button>
        </div>
        <div className='flex lg:hidden w-[10%] cursor-pointer'>
          <Image src={Icons.SearchIcon} alt='Search' />
        </div>
        {isMenuOpen && (
          <div className='fixed inset-0 bg-white dark:bg-black h-screen w-screen p-4 flex flex-col items-center z-30'>
            <button
              onClick={closeMenu}
              className='absolute top-10 right-4 text-black cursor-pointer'
            >
              <Image src={Icons.CloseMenu} alt='Zin' width={20} height={20} />
            </button>
            <div className='w-full h-full flex flex-col p-5 justify-between items-start'>
              <div>
                <Image src={Icons.LogoMain} alt='Zin' width={150} height={70} />
                <div className='pt-5'>
                  {MenuLinks.map((link, index) => (
                    <div
                      key={index}
                      className='text-black dark:text-white text-base font-medium cursor-pointer mb-4'
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
