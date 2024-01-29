import React from 'react';
import Image from 'next/image';
import { Icons } from '../assets/icons';
import ThemeSwitcher from './ThemeSwitcher';

interface SocialIcons {
  [key: string]: any;
}

const SocialIconsArray: SocialIcons = {
  YouTubeIcon: Icons.YouTubeIcon,
  FacebookIcon: Icons.FacebookIcon,
  TwitterIcon: Icons.TwitterIcon,
};

interface InternalLinksProps {
  title: string;
  links: string[];
}

const InternalLinks: React.FC<InternalLinksProps> = ({ title, links }) => (
  <div className='flex flex-col w-full lg:w-1/5 pt-8'>
    <h2 className='text-base font-bold text-black dark:text-white'>{title}</h2>
    <div className='pt-1 lg:pt-8'>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className='text-gray-800 dark:text-white my-3 text-base font-normal cursor-pointer'
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Footer() {
  const internalLinksData = [
    {
      title: 'Internal Links 1',
      links: ['Documentaries 1', 'Themes 1', 'Chrome casts 1'],
    },
    {
      title: 'Enterprise',
      links: [
        'Download Chrome Browser',
        'Chrome Browser for Enterprise',
        'Chrome Browser Devices',
        'ChromeOS',
        'Google Cloud',
        'Google Workspace',
      ],
    },
    {
      title: 'Internal Links 1',
      links: ['Documentaries 1', 'Themes 1', 'Chrome casts 1'],
    },
    {
      title: 'Enterprise',
      links: [
        'Download Chrome Browser',
        'Chrome Browser for Enterprise',
        'Chrome Browser Devices',
        'ChromeOS',
        'Google Cloud',
        'Google Workspace',
      ],
    },
    {
      title: 'Internal Links 1',
      links: ['Documentaries 1', 'Themes 1', 'Chrome casts 1'],
    },
  ];

  const NavLinks = [
    'Privacy Policy',
    'Terms and conditions',
    'Cookies Policy',
    'About us',
    'EULA',
    'Contact',
  ];

  return (
    <div className='bg-[#F0F3F4] dark:bg-black pt-4 pb-8'>
      <div className='flex flex-row px-5 lg:px-12 pb-5 pt-4 border-b border-[#E6E6E6] dark:border-white'>
        <h2 className='text-base font-medium text-black dark:text-white'>
          Follow Us
        </h2>
        {Object.keys(SocialIconsArray).map((iconKey) => (
          <div key={iconKey} className='ml-7'>
            <Image
              src={SocialIconsArray[iconKey]}
              alt={`SocialIcons - ${iconKey}`}
              width={24}
              height={24}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row px-5 lg:px-12 py-2 w-full pb-8 border-b border-[#E6E6E6] dark:border-white'>
        {internalLinksData.map((data, index) => (
          <InternalLinks key={index} title={data.title} links={data.links} />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row  px-5 lg:px-12 w-full pt-6 justify-between items-center'>
        <div className='flex flex-row w-full justify-between pb-3 lg:hidden'>
          <div className='w-[50%] flex'>
            <Image src={Icons.LogoMain} alt='Zin' width={150} height={75} />
          </div>
          <div className='w-[50%] flex justify-end'>
            <ThemeSwitcher />
          </div>
        </div>
        <div className='w-[25%] hidden lg:flex'>
          <Image src={Icons.LogoMain} alt='Zin' width={150} height={75} />
        </div>
        <div className='flex flex-wrap lg:flex-row my-1 lg:my-0 justify-between items-center w-full lg:w-[50%]'>
          {NavLinks.map((link, index) => (
            <div
              key={index}
              className='text-gray-800 dark:text-white text-sm font-normal cursor-pointer mx-3'
            >
              {link}
            </div>
          ))}
        </div>
        <div className='w-[25%] hidden lg:flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Footer;
