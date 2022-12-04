import React from 'react'

import { BsGift } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { GiHamShank } from 'react-icons/gi'

import aboutImage from '../assets/image-about.png'


// css file
import './about.css'

const about = () => {
  return (
    
    <section id='about'>
    
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
    
    
    <div className="about_me">
    
      <div className="about_me_img">
      
        <img src={aboutImage} alt="AboutImage"/>
      
      </div>
    
    </div>

    <div className="about_content">
    
      <div className="about_cards">
      
        <article className='about_card'>
        
          <FaAward className='about_icon' />
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        
        </article>


        <article className='about_card'>
        
        <BsGift className='about_icon' />
        <h5>Contribution</h5>
        <small>15+ worldwide</small>
      
        </article>


        <article className='about_card'>
          
        <GiHamShank className='about_icon' />
        <h5>Projects</h5>
        <small>15+ Completed</small>
      
        </article>
      
      </div>


      <p>
      
      I am Niloy Saha.I am a person who believes in hard work and is great at time management. Always eager to learn new skills,gather experience, and try to use a creative approach to handle multiple tasks on a daily basis. 
      I have experience working as part of a team and individually.
      
      </p>


      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      
    </div>
    
    
    </div>

    
    </section>
  )
}

export default about