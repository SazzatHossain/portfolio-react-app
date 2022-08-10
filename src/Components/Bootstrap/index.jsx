import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../Navbar';
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";

const BootLoader = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Skills />
    </BrowserRouter>
  )
}

export default BootLoader;