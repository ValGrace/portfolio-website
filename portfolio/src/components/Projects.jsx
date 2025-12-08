import { useState} from "react"
import '../Projects.scss'
// import ecomproj from "./ecom-home.PNG"
import { Modal } from "antd"
import { EcomModal, DocsModal, BlogModal, CMDModal } from "./Modals"
const Projects = () => {
   const [openModal, setOpenModal] = useState(false)
   const [secModal, setSecModal] = useState(false)
    const [thirdModal, setThirdModal] = useState(false)
    const [cmdModal, setCMDModal] = useState(false)
    return (
        <>
        <div className="minip" id="minip">
            <h2>VIEW SOME OF MY PROJECTS...</h2>
            
        </div>
        <div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>47DOCS</span>
    </div>
  </div>
  <div className="pav"></div>
  <div className="info" id="info">
  <div className="name">translator</div>
    <div className="deets">
      python/Gemini<br />
      translate pdfs
    </div>
  </div>
  <div className="plot" title="Document translator" onClick={() => setThirdModal(true)} >
    view project →
  </div>
  <Modal open={thirdModal} onOk={() => setThirdModal(false)} onCancel={() => setThirdModal(false)} title="Document translator" okText="Close">
    {<DocsModal />}
  </Modal>
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
      react/node<br />
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
      static sites
    </div>
  </div>
  <div className="plot" title="static site" onClick={() => setSecModal(true)}>
    view project →
  </div>
  <Modal open={secModal} onOk={() => setSecModal(false)} onCancel={() => setSecModal(false)} title="Blogs" okText="Close">
    {<BlogModal />}
  </Modal>
</div>
<div className="minip">
  <div className="mg">
    <div className="clr"></div>
    <div className="group">
      <span>CMD-BASE</span>
    </div>
  </div>
  <div className="gav"></div>
  <div className="info" id="info">
  <div className="name">history</div>
    <div className="deets">
      golang/powershell<br />
      save used commands
    </div>
  </div>
  <div className="plot" title="Terminal History" onClick={() => setCMDModal(true)} >
    view project →
  </div>
  <Modal open={cmdModal} onOk={() => setCMDModal(false)} onCancel={() => setCMDModal(false)} title="Document translator" okText="Close">
    {<CMDModal />}
  </Modal>
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
      react/node<br />
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
      static sites
    </div>
  </div>
  <div className="plot" title="static site" onClick={() => setSecModal(true)}>
    view project →
  </div>
  <Modal open={secModal} onOk={() => setSecModal(false)} onCancel={() => setSecModal(false)} title="Blogs" okText="Close">
    {<BlogModal />}
  </Modal>
</div>


            {/* <button className="new-proj"><Link to="/projects">add new project</Link></button>   */}
          
        </>
    )
}

export default Projects