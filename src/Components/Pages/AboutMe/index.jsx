import React from 'react';
import {Link} from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div id='about-me' className='w-full p-6'>
        <div className='max-w-[1400px] mx-auto px-2 '>
          <h2 className=' uppercase text-4xl tracking-widest text-orange-500'>About me</h2>
          <p className='font-bold text-2xl'>Who Am I?</p>
          <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='col-span-1'>
              <div
                className='flex justify-center items-center relative h-auto w-full p-4 shadow-xl shadow-gray-500 rounded-xl'>
                <img
                  src={'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                  alt="" loading='lazy' className='rounded-xl group-hover:opacity-10'/>
              </div>
            </div>
            <div className='col-span-1'>
              <div className="mt-6">
                <p className='text-justify'>I am a full-stack developer having 2.5 years experience in Ruby on Rails and
                  1.5 years experience in
                  React JS. I am currently working in <span
                    className='text-orange-600 font-bold text-decoration-line: underline'> <a
                    href="https://belivit.com/" target='_'>belivIT.</a></span> for almost 2 years and involve in two
                  major projects of the company.</p>
                <p className='text-justify py-4'>
                  I've got my BSc. degree on "Computer Science and Engineering" from <span
                  className='text-orange-600 font-bold text-decoration-line: underline'><a
                  href="https://nwu.edu.bd/" target='_'>North Western University, Khulna</a> </span>
                  in 2018 with CGPA of 3.20.
                </p>
                <p className='text-justify'>
                  Besides coding I have interest in playing guitar, playing games and wandering around in the city. My
                  future dream is to become successful in development field and having lot of money so that I can travel
                  those places I always wanted to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
