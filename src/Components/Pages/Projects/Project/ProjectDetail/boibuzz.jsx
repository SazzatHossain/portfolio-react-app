import React from 'react';
import {RiRadioButtonFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const BoibuzzPage = () => {
  return (
    <>
      <div className="w-full">
        <div className=' w-screen h-[40vh] lg: relative'>
          <div className='absolute top-0 right-0 bottom-0 w-full bg-black/70 z-[2]'/>
          <img src="/projects/boibuzz2.png" loading='lazy' className='absolute z-1 flex w-screen h-full' alt=""/>
          <div
            className='relative top-[60%] m-auto flex flex-col justify-between items-start text-white z-[3] p-2 lg:max-w-[75vw]'>
            <h2 className='py-2'>BoiBuzz</h2>
            <h3>A online book sharing platform</h3>
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
              This is a online book sharing platform. Users can use this website to buy/rent books and also can create own library of books. By creating own library anyone can also be a seller and rent/sell their books to other buyers.
              Beside the web view i also worked on backend for api development
              for the website, app and also for the admin panel using Ruby on Rails technology. This is my company
              project so can't provide source code.
            </p>
            <a
              href='#'
              target='_blank'
              rel="noreferrer"
            >
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
            <a
              href='#'
              target='_blank'
              rel="noreferrer"
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
                  Ruby on Rails
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Bootstrap
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Jquery
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  Ajax
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/>
                  MySql
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoibuzzPage;
