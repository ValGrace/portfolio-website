import React from "react"
import { Link } from "react-router-dom"
import './Projects.scss'
import ecomproj from "./ecom-home.PNG"

const Projects = () => {

    
    return (
        <>
           <figure className="project-card">
            
            <img src={ecomproj} alt="project illusr" />
            <figcaption>
               <h3>Ecommerce Marketplace</h3>
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