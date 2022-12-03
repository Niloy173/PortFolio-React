import React from 'react'
import { AiOutlineHome, AiOutlineMessage, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'

// css file
import './nav.css'

// hook
import { useState } from 'react'

const Nav = () => {

  const [active,setActive] = useState("#header");
  return (
    
    <nav>
    
      <a title='home' onClick={() => setActive('#header')} className={
        active === "#header"? 'active': ''
      } href='#header'><AiOutlineHome/></a>

      <a title='about' onClick={() => setActive('#about')} className={
        active === '#about'? 'active': ''
      }  href='#about'><AiOutlineUser/></a>
      
      <a onClick={() => setActive('#skill')} className={
        active === '#skill'? 'active': ''
      } title='skill' href='#skill'><GiSkills/></a>


      <a onClick={() => setActive('#project')} className={
        active === '#project'? 'active': ''
      } title='project' href='#project'><AiOutlineProject/></a>


      <a onClick={() => setActive('#contact')} className={
        active === '#contact'? 'active': ''
      } title='contact' href='#contact'><AiOutlineMessage/></a>
    
    </nav>
  )
}

export default Nav