import React from 'react'
import imgsd from "./imgsd.png"
const TopSection = () => {
    return (
        <div className='topsection'>
            <div className='content-topsection'>
        <h2>Hello,   <span>I am Grace Valerie, </span></h2>

        <h3 className='career'>a Software Engineer</h3>
        </div>
        <div className='side-topsection'>
        <img src={imgsd} alt='girl sitting with a laptop' /> 
            </div> 
            
           
        </div>
    )
}

export default TopSection