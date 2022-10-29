import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Task from './pages/Task';
import Timeline from './pages/Timeline';
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home/>} /> 
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/task' element={<Task/>} />
              <Route exact path='/timeline' element={<Timeline/>} />
            </Routes>
        </Router>
    
    </>
    // <Task/>
  );
}

export default App;
