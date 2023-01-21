import React from 'react'
import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />
        <h2>Projects</h2>
        <Projects />
        </>
    )
}

export default HomePage