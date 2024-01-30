'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icons } from './assets/icons';

const Home = () => {
  const Bookmarks = [
    {
      Image: Icons.EditPDF,
      title: 'Edit PDF',
      description: 'Use the best online tool to edit PDFs in your browser.',
    },
    {
      Image: Icons.CropPDF,
      title: 'Crop PDF',
      description:
        'Crop PDF online to a selected area, adjust margin size swiftly.',
    },
    {
      Image: Icons.ReplaceText,
      title: 'Replace Text',
      description: 'The easiest way to replace text online.',
    },
    {
      Image: Icons.RotatePDF,
      title: 'Rotate PDF',
      description: 'Rotate and save your PDF pages online for free.',
    },
  ];

  const PDFTools = [
    {
      Image: Icons.PDFText,
      title: 'PDF to Word',
      description: 'Easily convert PDF to Word document.',
    },
    {
      Image: Icons.PDFPPT,
      title: 'PDF to PPT',
      description: 'Convert PDF to Powerpoint online.',
    },
    {
      Image: Icons.PDFExcel,
      title: 'PDF to Excel',
      description: 'Convert PDF to xls for free.',
    },
    {
      Image: Icons.PDFJPG,
      title: 'PDF to JPG',
      description:
        'Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF',
    },
    {
      Image: Icons.PDFText,
      title: 'PDF to TXT',
      description: 'Convert your PDF to TXT, and extract text from your PDF.',
    },
    {
      Image: Icons.PDFRTF,
      title: 'PDF to RTF',
      description: 'Convert PDF to RTF online and free.',
    },
    {
      Image: Icons.CropPDF,
      title: 'PDF to Pages',
      description: 'Convert PDF to Pages on Mac and Windows.',
    },
  ];

  const itemsPerPage = window.innerWidth <= 768 ? 1 : 5;
  const totalItems = PDFTools.length;

  const [visiblePDFToolsIndex, setVisiblePDFToolsIndex] = useState(0);

  const handleScrollLeft = () => {
    setVisiblePDFToolsIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  const handleScrollRight = () => {
    setVisiblePDFToolsIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const visiblePDFTools = (() => {
    const startIndex = visiblePDFToolsIndex % totalItems;
    const endIndex = (startIndex + itemsPerPage) % totalItems;
    const wrappedItems = [];

    if (endIndex >= startIndex) {
      for (let i = startIndex; i < endIndex; i++) {
        wrappedItems.push({ ...PDFTools[i], index: i });
      }
    } else {
      for (let i = 0; i < itemsPerPage; i++) {
        wrappedItems.push({
          ...PDFTools[(startIndex + i) % totalItems],
          index: (startIndex + i) % totalItems,
        });
      }
    }

    return wrappedItems;
  })();

  return (
    <main className='flex flex-col h-full items-center bg-white dark:bg-black justify-between px-4 lg:px-16 py-8'>
      <div className='w-full items-center justify-between'>
        <h2 className='text-base lg:text-3xl  font-bold text-black dark:text-white'>
          Your Bookmarks
        </h2>
        <div className='w-full py-5 flex lg:space-x-5 flex-wrap'>
          {Bookmarks.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-start items-start text-left p-5 bg-white dark:bg-black rounded-lg border border-[#EBEBEB] max-w-[50%] lg:max-w-[20%] w-[45%] lg:w-[20%] space-y-3 m-2 lg:m-0 transition-shadow duration-300 ease-in-out transform-gpu ${'hover:shadow-lg'}`}
            >
              <Image src={item.Image} alt={item.title} width={65} height={65} />
              <h3 className='text-black dark:text-white text-sm lg:text-xl font-bold'>
                {item.title}
              </h3>
              <p className='overflow-hidden text-black dark:text-white text-xs lg:text-sm font-normal'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full items-center justify-between'>
        <h2 className='text-base lg:text-3xl font-bold text-black dark:text-white'>
          Convert From PDF
        </h2>
        <div className='flex flex-row items-center w-full lg:overflow-hidden py-8'>
          <div className='cursor-pointer' onClick={handleScrollLeft}>
            <Image src={Icons.LeftIcon} alt={'Left'} width={40} height={40} />
          </div>
          <div
            className='flex lg:space-x-5 mx-0 lg:mx-3 h-full flex-wrap '
            style={{
              transition: 'transform 0.9s linear',
              transform: `translateX(-${
                (visiblePDFToolsIndex / totalItems) * 1
              }%)`,
            }}
          >
            {visiblePDFTools.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start items-start min-h-[220px] text-left p-5 bg-white dark:bg-black rounded-lg border border-[#EBEBEB] max-w-[100%] lg:max-w-[20%] w-[100%] lg:w-[18.5%] space-y-3 m-2 lg:m-0 transition-shadow duration-300 ease-in-out transform-gpu ${'hover:shadow-lg'}`}
              >
                <Image
                  src={item.Image}
                  alt={item.title}
                  width={65}
                  height={65}
                />
                <h3 className='text-black dark:text-white text-sm text-left lg:text-xl font-bold'>
                  {item.title}
                </h3>
                <p className='overflow-hidden text-black dark:text-white text-left text-xs lg:text-sm font-normal'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className='cursor-pointer' onClick={handleScrollRight}>
            <Image src={Icons.RightIcon} alt={'Right'} width={40} height={40} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
