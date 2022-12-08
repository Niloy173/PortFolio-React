import React from 'react'

// load project data
import imageArray from '../ProjectData'

// css file
import './project.css'

const Project = () => {

  
  return (
    
    <section id='project'>
    
      <h5>Project I Have Done</h5>
      <h2>My Project</h2>

      <div className="container project_container">
      
        

          {
            imageArray.map(project => {
            
               
              return <article key={project.id} className='project_item'>
                
                <div className="project_item_img">
                  <img src={project.image} alt="AutoFLash" />
                </div>

                <h3>{project.title}</h3>
                <summary className='project_description'>{project.description}</summary>

                <div className="project_item_cta">
                
                <a href={project.gitLink} rel='noreferrer' target={"_blank"} className="btn" >GitHub</a>
                <a href={project.liveLink} rel='noreferrer' target={"_blank"} className="btn btn-primary" >{project.id === 6? "Demostration" :"Live Demo"}</a>
                
                </div>
            
  
                
                </article>
  
              
            })
          }
         
        


  

      
      </div>
      
    
    </section>
  )
}

export default Project