import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../Navbar';
import Home from "../Pages/Home";

const BootLoader = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  )
}

export default BootLoader;