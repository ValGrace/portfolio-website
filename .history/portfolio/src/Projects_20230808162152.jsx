import React from "react"
// import { Link } from "react-router-dom"
import './Projects.scss'
// import ecomproj from "./ecom-home.PNG"

const Projects = () => {

    
    return (
        <>
        <div className="minip" id="minip">
            <h2>View some of my projects...</h2>
        </div>
           <div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>anypay</span>
    </div>
  </div>
  <div className="av"></div>
  <div className="info" id="info">
  <name>ecommerce</name>
    <deets>
      369  react/node<br />
      tech marketplace
    </deets>
  </div>
  <a className="plot" title="ecommerce project" href="/">
    view project →
  </a>
</div>
<div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>static site</span>
    </div>
  </div>
  <div className="avs"></div>
  <div className="info" id="info">
  <name>blog generator</name>
    <deets>
        react/golang<br />
      static site generator
    </deets>
  </div>
  <a className="plot" title="ecommerce project" href="/">
    view project →
  </a>
</div>
            {/* <button className="new-proj"><Link to="/projects">add new project</Link></button>   */}
          
        </>
    )
}

export default Projects