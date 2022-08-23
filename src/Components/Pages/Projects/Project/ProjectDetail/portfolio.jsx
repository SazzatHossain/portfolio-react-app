import React from 'react';
import {RiRadioButtonFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const PortfolioPage = () => {
  return (
    <>
      <div className="w-full">
        <div className=' w-screen h-[40vh] lg: relative'>
          <div className='absolute top-0 right-0 bottom-0 w-full bg-black/70 z-[2]'/>
          <img src="/projects/portfolio2.png" loading='lazy' className='absolute z-1 flex w-screen h-full'/>
          <div
            className='relative top-[60%] m-auto flex flex-col justify-between items-start text-white z-10 p-2 lg:max-w-[75vw]'>
            <h2 className='py-2'>Portfolio</h2>
            <h3>A personal portfolio site</h3>
          </div>
        </div>
        <div className='mx-auto p-2 grid md:grid-cols-5 gap-8 py-12 lg:max-w-[75vw]'>
          <div className='col-span-4 text-left'>
            <Link to='/#home'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
            <h2 className='uppercase text-3xl tracking-widest text-orange-500'>Overview</h2>
            <p className='font-bold text-2xl mb-2'>Description</p>
            <p>
              This is a portfolio app describing my skills, detail and the projects i have done so far.
            </p>
            <a
              href='https://github.com/SazzatHossain/portfolio-react-app'
              target='_blank'
            >
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
            <a
              href='#'
              target='_blank'
            >
              <button className='px-8 py-2 my-4'>Demo</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1 ml-2'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
