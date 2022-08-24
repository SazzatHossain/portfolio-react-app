import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div id='home'
        className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-cover-img '>
        <div className='absolute top-0 right-0 bottom-0 w-full bg-black/60 '/>
        <div className='flex flex-col z-[3] w-full md:w-1/2'>
          <h1 className='text-white uppercase'>Hi, I'm <span className='text-orange-500'>Sazzat Hossain</span></h1>
          <h2 className='text-white uppercase '>A Full-Stack developer </h2>
          <p className='text-white text-center py-3 w-full '>I'm currently working at <span
            className='text-orange-600 font-bold text-decoration-line: underline'> <a
            href="src/Components/Pages/Home/index" target='_'>belivIT</a></span> as a full-stack web developer. My current stack is
            ReactJS for frontend and Ruby on Rails framework with mysql database as backend. I've more than 2.5 years of professional experience on web development. I've done several personal projects and involved in two official projects.</p>
          <div className='flex flex-row items-center justify-between  mx-auto py-4'>
            <a
              className='rounded-full shadow-lg p-4 mx-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="https://github.com/SazzatHossain" target='_blank'>
              <FaGithub/>
            </a>
            <a
              className='rounded-full shadow-lg p-4 mx-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="src/Components/Pages/Home/index" target='_blank'>
              <FaLinkedin/>
            </a>
            <a
              className='rounded-full shadow-lg p-4 mx-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="/#first_name">
              <AiOutlineMail />
            </a>
            <a
              className='rounded-full shadow-lg p-4 mx-4 shadow-gray-800 cursor-pointer  bg-white md:mx-8 hover: scale-110 ease-in duration-300'
              href="src/Components/Pages/Home/index#" target='_blank'>
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
