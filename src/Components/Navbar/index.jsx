import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')
  const [logo, setLogo] = useState('/logo/color-logo-white.svg')
  const [textColor, setTextColor] = useState('#ffffff')
  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeNavbar = () => {
      if(window.scrollY >= 90){
        setColor('#ffffff');
        setTextColor('#000000');
        setLogo('/logo/color-logo-black.svg');
      }else{
        setColor('transparent');
        setTextColor('#ffffff');
        setLogo('/logo/color-logo-white.svg');
      }
    };
    window.addEventListener('scroll', changeNavbar)
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black'>
      <div className='m-auto flex justify-between items-center text-white lg:max-w-[75vw]'>
        <img src={logo} alt="" className='p-4 z-[100]' width='110px' height='110px'/>
        <ul style={{color: `${textColor}`}} className='hidden font-[500] sm:flex'>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#home'>Home</a>
          </li>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#about-me'>About Me</a>
          </li>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#skills'>Skills</a>
          </li>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#projects'>Projects</a>
          </li>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#contact'>Contact</a>
          </li>
        </ul>

        <div className='block p-4 sm:hidden z-[100]'>
          {nav ? <AiOutlineClose onClick={handleNav} size={20} style={{color: `${textColor}, zIndex: "100"`}}/> :
            <AiOutlineMenu onClick={handleNav} size={20} style={{color: `${textColor}`}}/>}
        </div>
        <div
          className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center w-full h-screen bg-gray-700 z-[20] text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul >
            <li className='p-4 text-4xl hover:text-orange-500' onClick={handleNav} >
              <a href='/#home'>Home</a>
            </li>
            <li className='p-4 text-4xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#about-me'>About Me</a>
            </li>
            <li className='p-4 text-4xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#skills'>Skills</a>
            </li>
            <li className='p-4 text-4xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#projects'>Projects</a>
            </li>
            <li className='p-4 text-4xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;