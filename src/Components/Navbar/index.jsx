import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillInstagram, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedin} from "react-icons/fa";

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
        <a href='/#home ' className='z-[100]'>
          <img src={logo} alt="" className='p-4 ' width='110px' height='110px'/>
        </a>
        <ul style={{color: `${textColor}`}} className='hidden uppercase font-[500] sm:flex'>
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
          <ul className='uppercase'>
            <li className='p-4 text-2xl hover:text-orange-500' onClick={handleNav} >
              <a href='/#home'>Home</a>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#about-me'>About Me</a>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#skills'>Skills</a>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#projects'>Projects</a>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500' onClick={handleNav}>
              <a href='/#contact'>Contact</a>
            </li>
            <li className="ml-6 mt-10 hover:text-orange-500">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://drive.google.com/file/d/1s5yp3C_SW4pZppLIyPPm-WdJiYaGhqYK/view', '_blank')
                }}
                className='p-3'>Download Resume</button>
            </li>

            <h2 className=" mt-10">Connect with me</h2>
            <div className='flex flex-row items-center justify-between  mx-auto my-2 gap-4 '>
              <a
                className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer  bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                href="https://www.facebook.com/SazzatHossainDipto/" target='_blank' rel="noreferrer">
                <AiFillFacebook  style={{color: "black"}}/>
              </a>
              <a
                className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                href="https://www.linkedin.com/in/sazzat-hossain-7314b2144/" target='_blank' rel="noreferrer">
                <FaLinkedin style={{color: "black"}}/>
              </a>
              <a
                className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                href="https://www.instagram.com/sazzat_hossain_dipto/" target='_blank' rel="noreferrer">
                <AiFillInstagram style={{color: "black"}}/>
              </a>
              <div
                onClick={() =>  navigator.clipboard.writeText('sazzathossaindipto@gmail.com')}
                className='rounded-full shadow-lg p-4  shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'>
                <AiOutlineMail style={{color: "black"}}/>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;