import React from 'react';

interface InternalLinksProps {
  title: string;
  links: string[];
}

const InternalLinks: React.FC<InternalLinksProps> = ({ title, links }) => (
  <div className='flex flex-col w-full lg:w-1/5 pt-8'>
    <h2 className='text-base font-bold text-black dark:text-white'>{title}</h2>
    <div className='pt-1 lg:pt-5'>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className='text-gray-500 dark:text-white my-3 text-base font-normal cursor-pointer'
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default InternalLinks;
