import Profile from './ProfileSection'
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
import SvgIcon from './SvgIcon'
import Articles from './Articles'
// import ProjectsForm from './ProjectsForm'

const HomePage = () => {
    return (
        <>
        <TopSection />
        <Profile />
        {/* <Skillset /> */}
        {/* <h2>Projects</h2> */}
        <div className='grid md:grid-cols-3'>
        
        <Projects />
        </div>
        <SvgIcon />
        <Articles />
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage