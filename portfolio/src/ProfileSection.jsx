import React from 'react'
// import erie from "./erie.jpg"
import Skillset from './Skillset'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='about'>
                {/* <div id='profile-pic'>
                    <div id="profile-pic-mask"></div>
                    <img src={erie} alt='girl smiling when posing' />
                </div> */}
          <div id='profile-about'>      
         <h3 id='about-me'>about me</h3>
         
         <p>I studied software development at KCA University in Kenya. I enjoy using cutting edge technology tools to address challenges. With a strong foundation in software engineering, I can confidently deliver a project from the requirements to a final implemented product. I am proficient in React, Node JS, Golang programming and Cloud and Devops technologies.</p>
         {/* <div id="profile-btns">
         <button id='res-btn'>RESUME</button>
         <button id='res-btn'>CONTACT ME</button>
         </div> */}
         <h3>SkillSet</h3>
         </div>
         
         </div>
         
         <Skillset />
            
        </div>
    )
}

export default Profile