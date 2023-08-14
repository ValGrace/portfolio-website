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
        <div className='projects'>
        <h2>Projects</h2>
        <Projects />
        </div>
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage