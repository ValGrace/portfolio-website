import React from 'react'
import erie from "./erie.jpg"
const Profile = () => {
    return (
        <div className='profile'>
            <div className='about'>
                <div id='profile-pic'>
                    <img src={erie} alt='girl smiling when posing' />
                </div>
         <h3>about me</h3>
         <p>I studied software development at KCA University in Kenya. I enjoy developing software and I mostly pick interest in the deployment process. I am proficient in JavaScript (React and Node JS) and I am currently learning Go programming and Cloud and Devops technologies</p>
         </div>
         <div className='skills'>
            <h3>Skills</h3>
              <ul>
                <li>Programming</li>
                <li>Web Development</li>
                <li>System Design</li>
                <li>Cloud Engineering</li>
                <li>JavaScript</li>
                <li>Node js</li>
                <li>CSS</li>
                <li>Firebase</li>
                <li>Docker</li>
                <li>Serverless Computing</li>
                <li>Kubernetes</li>
                <li>React</li>
                <li>Golang (Beginner Level)</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile