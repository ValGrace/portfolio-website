import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
import {Articles} from './TechArticles'

const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />

        {/* <Skillset /> */}
        {/* <h2>Projects</h2> */}
        
        
        <Articles />
        <div className='grid md:grid-cols-3 gap-0 mx-auto justify-center items-center max-w-7xl px-6' id='projs'>
        
        <Projects />
        
        </div>
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage