import TopSection from './TopSection'
import Contact from './Contact'
import {Articles} from './TechArticles'
import { NewSect } from './NewSect'
import CaseStudies from './CaseStudies'

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
      
        <Contact />
        {/* <ProjectsForm /> */}
        </>
    )
}

export default HomePage