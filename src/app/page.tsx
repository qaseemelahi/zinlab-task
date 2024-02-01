import Image from 'next/image';
import Slider from './components/Slider';
import { Bookmarks, PDFTools, PDTools } from './db';

const Home = () => {
  return (
    <main className='flex flex-col h-screen overflow-y-scroll bg-white items-center  dark:bg-black justify-between px-4 lg:px-28 py-8'>
      <div className='w-full items-center justify-between'>
        <h2 className='text-base lg:text-3xl  font-bold text-black dark:text-white'>
          Your Bookmarks
        </h2>
        <div className='w-full py-5 flex lg:space-x-5 flex-wrap'>
          {Bookmarks.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-start items-start text-left p-5 bg-white dark:bg-black rounded-2xl border border-[#e5e5e55c] max-w-[50%] lg:max-w-[20%] w-[45%] lg:w-[20%] space-y-3 m-2 lg:m-0 transition-shadow duration-300 ease-in-out transform-gpu ${'hover:shadow-lg'}`}
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
      <Slider tools={PDFTools} />
      <Slider tools={PDTools} />
    </main>
  );
};

export default Home;
