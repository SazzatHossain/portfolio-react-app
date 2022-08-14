import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../Navbar';
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import AboutMe from "../Pages/AboutMe";

const BootLoader = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Skills />
      <Projects />
      <AboutMe />
    </BrowserRouter>
  )
}

export default BootLoader;