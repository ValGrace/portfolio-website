
import TopSection from './TopSection'
import Projects from './Projects'
import Contact from './Contact'
import {Articles} from './TechArticles'
import { NewSect } from './NewSect'
import CaseStudies from './CaseStudies'
import OnboardingModalDemo from './NewModal'

const HomePage = () => {
    return (
        <>
        <TopSection />
     
        <NewSect />
        {/* <Skillset /> */}
        {/* <h2>Projects</h2> */}
        
        <CaseStudies/>
        <Articles />
        <div className='grid md:grid-cols-3 gap-0 mx-auto justify-center items-center max-w-7xl px-6' id='projs'>
        
        {/* <Projects /> */}
        
        </div>
        <OnboardingModalDemo/>
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage