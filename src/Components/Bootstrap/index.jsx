import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "../Main";
import ProjectPage from "../Pages/Projects/Project/ProjectDetail/portfolio";
import BookflixPage from "../Pages/Projects/Project/ProjectDetail/bookFlix";

const BootLoader = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/portfolio-page" element={<ProjectPage />} />
          <Route path="/bookflix-page" element={<BookflixPage />} />
      </Routes>
    </Router>
  )
}

export default BootLoader;