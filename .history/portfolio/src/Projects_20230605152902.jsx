import React from "react"
import { Link } from "react-router-dom"
import './Projects.scss'
import projimg from "./img_0.jpg"

const Projects = () => {

    
    return (
        <>
           <figure className="project-card">
            
            <img src={projimg} alt="project illusr" />
            <figcaption>
               <h3>Project Title</h3>
            </figcaption>
            <ul className="card-list">
                <li>Skill</li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum?</p>
            <button>Link</button> 
            </figure>
            <button className="new-proj"><Link to="/projects">add new project</Link></button>  
          
        </>
    )
}

export default Projects