import React from 'react'

// image files
import project1 from '../assets/autoFlash.jpg'
import project2 from '../assets/chatApp.jpg'
import project3 from '../assets/fundRaiser.jpg'
import project4 from '../assets/mathBook.jpg'
import project5 from '../assets/mustardOil.jpg'
import project6 from '../assets/sortingVisualization.jpg'

// css file
import './project.css'

const Project = () => {

  const imageArray = [
    {
      id: 1,
      title: "AUTO FLASH",
      image: project1,
      description : "An useful application which is easily turned on the flashlight to the rear camera based on some important Events",
      gitLink: "https://github.com/Niloy173/AutoFlash",
      liveLink: "https://play.google.com/store/apps/details?id=com.teamaspirant.autoflash"
    },
    {
      id: 2,
      title: "CHAT APPLICATION",
      image: project2,
      description : "A real time chat environment so feel free to explore yourself by chating with your friends or any unknown user of which you want to conect",
      gitLink: "https://github.com/Niloy173/Chat-Application",
      liveLink: "https://chatapp-j8xc.onrender.com/"
    },
    {
      id: 3,
      title: "Easy Fund",
      image: project3,
      description : "A crowdfunding application or platform of hope, want, desire and anticipate where help each other's dream to be successful by sharing indiviual story, business or creation",
      gitLink: "https://github.com/Niloy173/EasyFund",
      liveLink: "https://easyfund.onrender.com/"
    },
    {
      id:4,
      title: "MATH GUIDE BOOK",
      image: project4,
      description : "MathGuideBook - This is a Simple Math Solution App for Class 9-10 in BD",
      gitLink: "https://github.com/Niloy173/MathGuideBook",
      liveLink: "https://play.google.com/store/apps/details?id=com.teamaspirant.mathguidebook"
    },

    {
      id:5,
      title: "MUSTARD OIL",
      image: project5,
      description : "Design template for single product e-commerce platform for buy & sell things",
      gitLink: "https://github.com/Niloy173/Muatard-Oil",
      liveLink: "https://niloy173.github.io/Muatard-Oil/"
    },
    {
      id:6,
      title: "SORTING VISUALIZATION",
      image: project6,
      description : "Sort the pixel to get the Original Picture from the Unsorted Pixels",
      gitLink: "https://github.com/Niloy173/Sorting-Visualization",
      liveLink: "https://www.youtube.com/watch?v=bA_P4yi-w-c&ab_channel=NiloySaha"
    }
  ];
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
                <a href={project.liveLink} rel='noreferrer' target={"_blank"} className="btn btn-primary" >Live Demo</a>
                
                </div>
            
  
                
                </article>
  
              
            })
          }
         
        


  

      
      </div>
      
    
    </section>
  )
}

export default Project