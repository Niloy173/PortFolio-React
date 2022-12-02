import React from 'react'
import MyImage from '../assets/headerImage.png'
import './header.css'

// component
import ButtonAction from './ButtonAction'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    
    <header>
      <div className="container">

        <div className="container header_container">
        
          <h5>Hello I'm</h5>
          <h1>Niloy Saha</h1>
          <h5 className="text-light">JavaScript Developer</h5>
    
          <ButtonAction/>
          <HeaderSocial/>

          <div className="personalImage">
          
            <img src={MyImage} alt="personalImage" />

            <a href="#contact" className='scroll_down'>Scroll Down</a>

          </div>
         
        </div>
        
      </div>
    </header>
  )
}

export default Header