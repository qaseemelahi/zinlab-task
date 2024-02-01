import React from 'react';
import Image from 'next/image';
import { Icons } from '../assets/icons';
import ThemeSwitcher from './ThemeSwitcher';
import { NavLinks, SocialIconsData, internalLinksData } from '../db';
import InternalLinks from './InternalLinks';

function Footer() {
  return (
    <div className='bg-[#F0F3F4] dark:bg-black pt-4 pb-8 px-5 lg:px-12'>
      <div className='flex flex-row  pb-7 pt-6 border-b border-[#E6E6E6] dark:border-white'>
        <h2 className='text-base font-medium text-black dark:text-white'>
          Follow Us
        </h2>
        {Object.keys(SocialIconsData).map((iconKey) => (
          <div key={iconKey} className='ml-7 flex justify-center items-center'>
            <div className='hidden dark:flex'>
              <Image
                src={SocialIconsData[iconKey].dark}
                alt={`SocialIcons - ${iconKey}`}
                width={20}
                height={20}
              />
            </div>
            <div className='flex dark:hidden'>
              <Image
                src={SocialIconsData[iconKey].light}
                alt={`SocialIcons - ${iconKey}`}
                width={20}
                height={20}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row  py-2 w-full pb-8 border-b border-[#E6E6E6] dark:border-white'>
        {internalLinksData.map((data, index) => (
          <InternalLinks key={index} title={data.title} links={data.links} />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row  w-full pt-6 justify-between items-center'>
        <div className='flex flex-row w-full justify-between pb-3 lg:hidden'>
          <div className='w-[50%] flex'>
            <Image src={Icons.LogoMain} alt='Zin' width={150} height={75} />
          </div>
          <div className='w-[50%] flex justify-end'>
            <ThemeSwitcher />
          </div>
        </div>
        <div className='flex flex-row w-full justify-start'>
          <div className='w-[15%] hidden lg:flex'>
            <Image src={Icons.LogoMain} alt='Zin' width={150} height={75} />
          </div>
          <div className='flex flex-wrap lg:flex-row my-1 lg:my-0 justify-between items-center w-full lg:w-[80%]'>
            {NavLinks.map((link, index) => (
              <div
                key={index}
                className='text-gray-800 dark:text-white text-sm font-normal cursor-pointer mx-3'
              >
                {link}
              </div>
            ))}
          </div>
        </div>
        <div className='w-[25%] hidden lg:flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Footer;
