import React from 'react';

const Skill = ({Image, skillName}) => {
  return (
    <>
      <div className='shadow-xl rounder-xl p-6 my-5 hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className="m-auto">
            <img src={Image} alt={skillName} loading='lazy' width='65px' height='65px'/>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3>{skillName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
