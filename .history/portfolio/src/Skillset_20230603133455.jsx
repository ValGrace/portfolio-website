const Skillset = () => {
    return (
        <div className="skills">
        
        <h3>SkillSet</h3>
        <div id="skillset">
        <div id="web-skillset">
            <div className="skill-icons">
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>

            <i class="devicon-react-original-wordmark colored"></i>
          
            </div>
            <h4>
                Front-End Development
            </h4>
            <p>I build front end web applications using html, css, javascript, react and redux libraries</p>
        </div>
        <div id="web-skillset">
            <div>
            <i class="devicon-ssh-original"></i>
            </div>
            <h4>
                Software Engineering
            </h4>
            <p>Through my software engineering degree, I learnt several technologies, programming languages and SE principles including object-oriented and functional programming.</p>  
        </div>
        <div id="web-skillset">
            <div>
            <i class="devicon-go-original-wordmark colored"></i>
            </div>
        </div>
        <div id="web-skillset">
            <h4>Cloud / Backend Technologies</h4>
            <ul id="skill-ul">
                <li>Firebase</li>
                <li>Serverless Framework</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD (Jenkins)</li>
                <li>Git</li>
                <li>Golang</li>
                <li>aws</li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default Skillset