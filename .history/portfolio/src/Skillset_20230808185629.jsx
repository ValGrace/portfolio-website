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
            <h3>
                Web Development
            </h3>
            <p>I build front end web applications using html, css, javascript, react and redux libraries</p>
        </div>
        <div id="web-skillset">
            <div>
            <i className="devicon-ssh-original"><span>Software Engineering</span></i>
            </div>
            
            <p>My Software Engineering degree ecuiped me with applicable skills in programming, following design principles and engineering practices, problem solving and adaptability to new technology.</p>  
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
            <h4>Cloud Computing</h4>
            <p>I use nodejs for my backend projects wen creatin apis and connecting a database. I recently started using golang </p>
        </div>
        </div>
        </div>
    )
}

export default Skillset