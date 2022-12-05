import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'

// css file
import './footer.css'

const Footer = () => {
  return (
   
    <footer>
    
      <p className='footer_logo'>Niloy Saha</p>

      <ul className='links'>
      
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skill</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      
      </ul>

      <div className="social_links">

        <a target={"_blank"} rel="noreferrer" href='https://www.facebook.com/profile.php?id=100007341856783'><FaFacebookF/></a>
        <a target={"_blank"} rel="noreferrer" href='https://twitter.com/Niloy1073'><FiTwitter/></a>
        <a target={"_blank"} rel="noreferrer" href='https://telegram.me/niloysaha173'><TbBrandTelegram/></a>
      
      </div>

      <div className="footer_copyright">
      
        <small>&copy; Niloy Saha. All rights reserved</small>

      </div>
    
    </footer>
   
  )
}

export default Footer