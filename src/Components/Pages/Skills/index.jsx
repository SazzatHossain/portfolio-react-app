import React from 'react';
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full  md:h-auto p-6">
        <div className='flex flex-col mx-auto  mt-[5rem] justify-center h-auto max-w-[1400px]'>
          <h2 className=' uppercase text-4xl tracking-widest text-orange-500'>Skills</h2>
          <p className='font-bold text-2xl'>Things I can do</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Skill Image= "/skills/html.png" skillName = "HTML"/>
            <Skill Image= "/skills/css.png" skillName = "CSS"/>
            <Skill Image= "/skills/bootstrap.png" skillName = "Bootstrap"/>
            <Skill Image= "/skills/tailwind.png" skillName = "Tailwind CSS"/>
            <Skill Image= "/skills/material.png" skillName = "Material UI"/>
            <Skill Image= "/skills/javascript.png" skillName = "Javascript"/>
            <Skill Image= "/skills/react.png" skillName = "ReactJS"/>
            <Skill Image= "/skills/ruby.png" skillName = "Ruby"/>
            <Skill Image= "/skills/ruby-on-rails.png" skillName = "Ruby on Rails"/>
            <Skill Image= "/skills/github.png" skillName = "GitHub"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
