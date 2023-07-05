import React from 'react'
import imgsd from "C:/Users/Hp 15/Downloads/3d-business-girl-chatting-online.png"
const TopSection = () => {
    return (
        <div className='topsection'>
            <div className='content-topsection'>
        <h2>Hello,   <span>I am Grace Valerie, </span></h2>

        <h3 className='career'>a Software Engineer</h3>
        </div>
        <div className='side-topsection'>
        
            </div> 
            <img src={imgsd} alt='girl sitting with a laptop' /> 
            {/* Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
        </div>
    )
}

export default TopSection