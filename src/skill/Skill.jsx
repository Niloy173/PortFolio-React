import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

//css file
import './skill.css'

const Skill = () => {
  return (
    
    <section id='skill'>
    
     <h5>What Skill I Have</h5>
     <h2>My Skill</h2>

     <div className="container skill_container">
     
      <div className="skill_frontend">

        <h3> Frontend Development </h3>
        <div className="skill_content">
        
          <article className='skill_details'>
          
            <BsPatchCheckFill className='icon'/>
            <div>
            
            <h4>HTML</h4>
            <small>Experienced</small>
            
            </div>

          </article>

          <article className='skill_details'>
          
          <BsPatchCheckFill className='icon'/>
          <div>
          
          <h4>CSS</h4>
          <small>Experienced</small>
          
          </div>
        
         </article>

         <article className='skill_details'>
            
         <BsPatchCheckFill className='icon'/>
         <div>
           <h4>Bootstrap</h4>
           <small>Basic</small>
       
         </div>
         </article>


        <article className='skill_details'>
          
        <BsPatchCheckFill className='icon'/>
        <div>
        
        <h4>JavaScript</h4>
        <small>Experienced</small>

        </div>
      
        </article>

        <article className='skill_details'>
              
        <BsPatchCheckFill className='icon'/>
        <div>
        
        <h4>React</h4>
        <small>Basic</small>
        
        </div>
      
        </article>

      
        </div>

      </div>


      <div className="skill_backend">
        
        <h3> Backend Development </h3>
        <div className="skill_content">
          
            <article className='skill_details'>
            
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>Node JS</h4>
              <small>Intermidate</small>
              </div>
            
            </article>

            <article className='skill_details'>
            
            <BsPatchCheckFill className='icon'/>
            <div>

            <h4>Firebase</h4>
            <small>Basic</small>
          

            </div>
            </article>

            <article className='skill_details'>
                  
            <BsPatchCheckFill className='icon'/>
            <div>
            
            <h4>JAVA</h4>
            <small>Intermediate</small>

            </div>
          
            </article>

            <article className='skill_details'>
                
            <BsPatchCheckFill className='icon'/>
            <div>
            
            <h4>MongoDB</h4>
            <small>Intermediate</small>

            </div>
          
            </article>


          <article className='skill_details'>
              
            <BsPatchCheckFill className='icon' />
           <div>
           
           <h4>SQL Script</h4>
           <small>Basic</small>
           
           </div>
          
          </article>


        
        </div>
        
      </div>
     
  </div>
    
    </section>
  )
}

export default Skill