import React from 'react'
import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
// import ProjectsForm from './ProjectsForm'

const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />
        {/* <Skillset /> */}
        {/* <h2>Projects</h2> */}
        <div className='projects'>
        
        <Projects />
        </div>
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage