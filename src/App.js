import logo from './logo.svg';
import './App.css';
import BootLoader from './Components/Bootstrap';
import Navbar from "./Components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BootLoader/>
    </div>
  );
}

export default App;
