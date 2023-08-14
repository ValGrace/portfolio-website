import React from "react"
import { Link } from "react-router-dom"
import './Projects.scss'
import ecomproj from "./ecom-home.PNG"

const Projects = () => {

    
    return (
        <>
           <div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>membergroup</span>
    </div>
  </div>
  <div className="av"></div>
  <div className="info" style="background-image: url('https://pbs.twimg.com/media/DjfSp1BVAAAiEyV.jpg');">
    
  </div>
  <a className="plot" title="plot with jinkyu" href="/">
    view plots →
  </a>
</div>
            <button className="new-proj"><Link to="/projects">add new project</Link></button>  
          
        </>
    )
}

export default Projects