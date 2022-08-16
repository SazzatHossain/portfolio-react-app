import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";

const BootLoader = () => {
  return (
    <BrowserRouter>
      <Home/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}

export default BootLoader;