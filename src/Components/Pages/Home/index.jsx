import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div
        className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-cover-img'>
        <div className='absolute top-0 right-0 bottom-0 w-full bg-black/60 z-[2]'/>
        <div className='flex flex-col w-full'>
          <h1 className='text-white uppercase z-10'>Hi, I'm <span className='text-orange-500'>Sazzat Hossain</span></h1>
          <h2 className='text-white uppercase z-10'>A Full-Stack developer </h2>
          <p className='text-white z-10 py-3 w-full text-center'>I'm currently working at <span
            className='text-orange-600 font-bold text-decoration-line: underline'> <a
            href="https://belivit.com/" target='_'>belivIT</a></span> as a full-stack web developer. My current stack is
            ReactJS for frontend and Ruby on Rails framework with mysql database as backend.</p>
          <div className='flex flex-row items-center justify-between  mx-auto py-4'>
            <a
              className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer z-10 bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="https://github.com/SazzatHossain" target='_blank'>
              <FaGithub/>
            </a>
            <a
              className='rounded-full shadow-lg p-4 mx-3  shadow-gray-800 cursor-pointer z-10 bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="https://www.linkedin.com/in/sazzat-hossain-7314b2144/" target='_blank'>
              <FaLinkedin/>
            </a>
            <a
              className='rounded-full shadow-lg p-4  shadow-gray-800 cursor-pointer z-10 bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="#" target='_blank'>
              <AiOutlineMail />
            </a>
            <a
              className='rounded-full shadow-lg p-4  mx-3 shadow-gray-800 cursor-pointer z-10 bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="#" target='_blank'>
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
