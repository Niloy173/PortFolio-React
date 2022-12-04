import React from 'react';

// components
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './nav/Nav';
import Project from './project/Project';
import Skill from './skill/Skill';
// import Experience from './Work/Experience';

const App = () => {
  return (
    <>
    
     <Header/>
     <Nav/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
    
    </>
  )
}

export default App;