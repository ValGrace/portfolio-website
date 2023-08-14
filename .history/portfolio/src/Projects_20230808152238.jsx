import React from "react"
import { Link } from "react-router-dom"
import './Projects.scss'
// import ecomproj from "./ecom-home.PNG"

const Projects = () => {

    
    return (
        <>
           <div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>anypay</span>
    </div>
  </div>
  <div className="av"></div>
  <div className="info" id="info">
    
  </div>
  <a className="plot" title="ecommerce project" href="/">
    view project →
  </a>
</div>
            <button className="new-proj"><Link to="/projects">add new project</Link></button>  
          
        </>
    )
}

export default Projects