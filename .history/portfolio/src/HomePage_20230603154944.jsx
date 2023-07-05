import React from 'react'
import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
import ProjectsForm from './ProjectsForm'
import Skillset from './Skillset'
const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />
        {/* <Skillset /> */}
        <h2>Projects</h2>
        <Projects />
        <Contact />
        <ProjectsForm />
        </>
    )
}

export default HomePage