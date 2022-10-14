import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,useLocation
  } from "react-router-dom";
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const AnimatedRoutes = ({projects, active, setActive}) => {


  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Navbar active={active} setActive={setActive}/>} />
          <Route path='/portfolio' element={<Portfolio projects={projects} />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes