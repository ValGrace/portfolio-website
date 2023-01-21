import React from 'react'
import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />
        <h2>Projects</h2>
        <Projects />
        <Contact />
        </>
    )
}

export default HomePage