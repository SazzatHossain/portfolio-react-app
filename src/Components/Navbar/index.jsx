import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#ffffff')
  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeNavbar = () => {
      if(window.scrollY >= 90){
        setColor('#ffffff');
        setTextColor('#000000');
      }else{
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeNavbar)
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center text-white'>
        <h1 style={{color: `${textColor}`}} className='p-4'>SH</h1>
        <ul style={{color: `${textColor}`}} className='hidden font-[500] sm:flex'>
          <li className='p-4 hover:text-orange-500'>Home</li>
          <li className='p-4 hover:text-orange-500'>
            <a href='/#skills'>Skills</a>
          </li>
          <li className='p-4 hover:text-orange-500'>Projects</li>
          <li className='p-4 hover:text-orange-500'>About Me</li>
          <li className='p-4 hover:text-orange-500'>Contact</li>
        </ul>

        <div className='block p-4 sm:hidden z-[100]'>
          {nav ? <AiOutlineClose  onClick={handleNav} size={20} style={{color: `${textColor}`}}/> :
            <AiOutlineMenu onClick={handleNav} size={20} style={{color: `${textColor}`}}/>}
        </div>
        <div
          className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center w-full h-screen bg-black z-[20] text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500' >Home</li>
            <li className='p-4 text-4xl hover:text-gray-500'>Skills</li>
            <li className='p-4 text-4xl hover:text-gray-500'>Projects</li>
            <li className='p-4 text-4xl hover:text-gray-500'>About Me</li>
            <li className='p-4 text-4xl hover:text-gray-500'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;