import React from 'react'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='about'>
         <h3>about me</h3>
         <p>I studied software development at KCa University in Kenya. I enjoy developing software and I mostly pick interest in the deployment process. I am proficient in JavaScript (React and Node JS) and I am currently learning Go programming and Cloud and Devops technologies</p>
         </div>
         <div className='skills'>
            <h3>Skills</h3>
              <ul>
                <li>Programming</li>
                <li>Web Development</li>
                <li>System Design</li>
                <li>Cloud Engineering</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile