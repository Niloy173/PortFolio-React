import React from 'react'
import { BsCheck } from 'react-icons/bs'

//css file
import './experience.css'

const Experience = () => {
  return (
   
    <section id="experience">
    
      <h5>Work Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
      
       {/* first experience */}
      <article className="experience">
        
          <div className="experience_head">
          
            <h3>Company Name</h3>
            <small>position at the company</small>
          
          </div>

          <ul className='work_list'>
          
            <li>
              <BsCheck className='work_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='work_list_icon' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>


            <li>
            <BsCheck className='work_list_icon' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='work_list_icon' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          
          </ul>


        
      </article>

        {/* second  experience */}
      <article className="experience">
        
        <div className="experience_head">
        
          <h3>Company Name</h3>
          <small>position at the company</small>
        
        </div>

        <ul className='work_list'>
        
          <li>
            <BsCheck className='work_list_icon' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
          <BsCheck className='work_list_icon' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>


          <li>
          <BsCheck className='work_list_icon' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
          <BsCheck className='work_list_icon' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        
        </ul>


      
      </article>

       {/* third experience */}
      <article className="experience">
        
      <div className="experience_head">
      
        <h3>Company Name</h3>
        <small>position at the company</small>
      
      </div>

      <ul className='work_list'>
      
        <li>
          <BsCheck className='work_list_icon' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
        <BsCheck className='work_list_icon' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>


        <li>
        <BsCheck className='work_list_icon' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
        <BsCheck className='work_list_icon' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
      
      </ul>


    
      </article>
       
      
      </div>
    
    </section>
  )
}

export default Experience