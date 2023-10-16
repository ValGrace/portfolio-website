import React from 'react'
import imgsd from "./girlgry.jpg"
const TopSection = () => {
    return (
        <div className='topsection'>
          <div className='content-topsection'>
            <h5>Hello, I am</h5>        
            <h1><span>Grace V. Anyango</span></h1>

            <h3 className='career'>a<span id="pseudo"> Software </span> Engineer</h3>
          </div>
        <div className='side-topsection'>
        <img src={imgsd} alt='girl sitting with a laptop' /> 
            </div> 
            
           
        </div>
    )
}

export default TopSection