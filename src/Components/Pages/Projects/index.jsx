import React from 'react';
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id='projects' className='h-auto w-full p-6'>
        <div className='flex flex-col mx-auto  mt-[5rem] justify-center h-auto max-w-[1400px] '>
          <h2 className=' uppercase text-3xl tracking-widest text-orange-500'>Projects</h2>
          <p className='font-bold text-2xl'>Things I've built</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <Project ProjectName="BookFlix" BuiltWith="React & Ruby on Rails" ImageUrl="/projects/bookflix.png"/>
            <Project ProjectName="Portfolio" BuiltWith="React & Tailwind CSS" ImageUrl="/projects/portfolio.png"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
