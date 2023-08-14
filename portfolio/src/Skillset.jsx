const Skillset = () => {
    return (
        <div className="skills">
        
        
        <div id="skillset">
        <div id="web-skillset">
            <div className="skill-icons">
           
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>

            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-go-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            
            
            </div>
            <h4>
                Web Development
            </h4>
            <p>I possess a comprehensive skill set in web development, leveraging react to build interactive interfaces and golang for implementing scalable APIs and backend solutions.</p>
            
        </div>
        <div id="web-skillset">
            <div>
            <i className="devicon-ssh-original"><span></span></i><h4>Software Engineering</h4>
            </div>
            
            <p>My Software Engineering degree ecquiped me with applicable skills in programming, following design principles and engineering practices, problem solving and adaptability to new technology.</p>  
        </div>
        {/* <div id="web-skillset">
            <div>
            
          
            </div>
            <h4>Backend Development</h4>
            <p>I use nodejs for my backend projects wen creatin apis and connecting a database. I recently started using golang </p>
        </div> */}
        <div id="web-skillset">
            <div>
            <i className="devicon-git-plain-wordmark colored"></i>
            
            <i className="devicon-docker-plain-wordmark colored"></i>
          
            <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
          
          
          
            </div>
            <h4>Cloud Computing and Devops</h4>
            <p>I have a solid grasp of how to utilise cloud services and tools such as serverless technology tools, setting up workflows and overall leveraging the cloud. </p>
        </div>
        </div>
        </div>
    )
}

export default Skillset