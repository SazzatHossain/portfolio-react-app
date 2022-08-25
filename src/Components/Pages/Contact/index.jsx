import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {AiFillFacebook, AiFillInstagram, AiOutlineMail} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div id='contact' className='w-full md:h-auto p-6'>
        <div className='flex flex-col mx-auto  mt-[5rem] justify-center h-auto max-w-[1400px]'>
          <h2 className=' uppercase text-3xl tracking-widest text-orange-500'>Contact</h2>
          <p className='font-bold text-2xl'>How to contact me?</p>
          <div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='col-span-1'>
              <div
                className='flex flex-col justify-center items-center relative h-auto w-full p-4 shadow-xl shadow-gray-500 rounded-xl md:h-screen '>
                <img
                  src={'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                  alt="" loading='lazy' className='rounded-xl group-hover:opacity-10'/>
                <div className="mt-6">
                  <p className='font-bold text-2xl text-left'>Sazzat Hossain</p>
                  <p className=' text-xl text-left my-4'>Full-stack developer</p>
                  <p className='text-justify'>I am available for freelance jobs or can also hire me for a full time
                    developer for your company. From below options you can connect with me. </p>
                </div>
                <div className='flex flex-row items-center justify-between  mx-auto my-6 gap-4 '>
                  <a
                    className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer  bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                    href="https://www.facebook.com/SazzatHossainDipto/" target='_blank' rel="noreferrer">
                    <AiFillFacebook/>
                  </a>
                  <a
                    className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                    href="https://www.linkedin.com/in/sazzat-hossain-7314b2144/" target='_blank' rel="noreferrer">
                    <FaLinkedin/>
                  </a>
                  <a
                    className='rounded-full shadow-lg p-4 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'
                    href="https://www.instagram.com/sazzat_hossain_dipto/" target='_blank' rel="noreferrer">
                    <AiFillInstagram/>
                  </a>
                  <div
                    onClick={() =>  navigator.clipboard.writeText('sazzathossaindipto@gmail.com')}
                    className='rounded-full shadow-lg p-4  shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div
                className='flex flex-col justify-center items-center relative h-auto w-full p-4 shadow-xl shadow-gray-500 rounded-xl md:h-screen'>
                <p className='font-bold uppercase mb-6 text-2xl'>Send me a Message</p>
                <div className='grid md:grid-cols-2 w-full gap-4 py-2'>
                  <div className="flex flex-col">
                    <label className='text-sm font-bold uppercase py-2 text-left'>First Name</label>
                    <input id='first_name' className='flex rounded-lg p-3  border-2 border-gray-500' type="text"/>
                  </div>
                  <div className="flex flex-col">
                    <label className='text-sm font-bold uppercase py-2 text-left'>Last Name</label>
                    <input className='flex rounded-lg p-3  border-2 border-gray-500' type="text"/>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className='text-sm font-bold uppercase py-2 text-left'>Phone No</label>
                  <input className='flex rounded-lg p-3  border-2 border-gray-500' type="text"/>
                </div>
                <div className="flex flex-col w-full">
                  <label className='text-sm font-bold uppercase py-2 text-left'>Email</label>
                  <input className='flex rounded-lg p-3  border-2 border-gray-500' type="text"/>
                </div>
                <div className="flex flex-col w-full">
                  <label className='text-sm font-bold uppercase py-2 text-left'>Subject</label>
                  <input className='flex rounded-lg p-3  border-2 border-gray-500' type="text"/>
                </div>
                <div className="flex flex-col w-full">
                  <label className='text-sm font-bold uppercase py-2  text-left '>Message</label>
                  <textarea className='flex rounded-lg p-3  border-2 border-gray-500 min-h-[15vh]'/>
                </div>
                <div className="flex flex-col w-full py-8">
                  <button className='py-3'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center p-3 mt-10'>
          <a href='/#home'>
            <div className='rounded-full shadow-lg p-5 shadow-gray-800 cursor-pointer hover:text-orange-400 scale-110 ease-in duration-300 '>
              <HiOutlineChevronDoubleUp />
            </div>
          </a>
        </div>
      </div>
    </>
  )
    ;
};

export default Contact;
