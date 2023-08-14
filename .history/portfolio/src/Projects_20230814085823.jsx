import React, { useState} from "react"
// import { Link } from "react-router-dom"
import './Projects.scss'
// import ecomproj from "./ecom-home.PNG"
import { Modal } from "antd"
import { EcomModal, BlogModal } from "./Modals"
const Projects = () => {
   const [openModal, setOpenModal] = useState(false)
   const [secModal, setSecModal] = useState(false)
    
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
  <div className="name">ecommerce</div>
    <div className="deets">
      369  react/node<br />
      tech marketplace
    </div>
  </div>
  <div className="plot" title="ecommerce project" onClick={() => setOpenModal(true)} >
    view project →
  </div>
  <Modal open={openModal} onOk={() => setOpenModal(false)} onCancel={() => setOpenModal(false)} title="Ecommerce Marketplace" okText="Close">
    {<EcomModal />}
  </Modal>
</div>
<div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>Sculptor</span>
    </div>
  </div>
  <div className="avs"></div>
  <div className="info" id="info">
  <div className="name">blog generator</div>
    <div className="deets">
        react/golang<br />
      static site generator
    </div>
  </div>
  <div className="plot" title="static site" onClick={() => setSecModal(true)}>
    view project →
  </div>
  <Modal open={secModal} onOk={() => setSecModal(false)} onCancel={() => setSecModal(false)} title="Ecommerce Marketplace" okText="Close">
    {<BlogModal />}
  </Modal>
</div>
            {/* <button className="new-proj"><Link to="/projects">add new project</Link></button>   */}
          
        </>
    )
}

export default Projects