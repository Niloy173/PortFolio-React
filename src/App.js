import React from 'react';

// components
import About from './about/About';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './nav/Nav';
import Project from './project/Project';


const App = () => {
  return (
    <>
    
     <Header/>
     <Nav/>
     <About/>
     <Project/>
     <Footer/>
    
    </>
  )
}

export default App;