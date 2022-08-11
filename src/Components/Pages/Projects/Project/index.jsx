import React from 'react';
import {Link} from "react-router-dom";

const Project = ({ProjectName, BuiltWith, ImageUrl}) => {
  return (
    <>
      <div
        className='flex justify-center items-center relative h-auto w-full p-4 my-12 shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-blue-600 to-blue-200'>
        <img src={ImageUrl} alt="" loading='lazy' className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl tracking-wide text-center text-white'>
            {ProjectName}
          </h3>
          <p className='text-xl text-white text-center py-4'>{BuiltWith}</p>
          <Link to="#">
            <p className='text-gray-500 bg-white text-xl font-bold p-2 cursor-pointer rounded-xl'>
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
