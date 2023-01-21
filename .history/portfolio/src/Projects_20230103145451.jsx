import React from "react";

const Projects = () => {
    return (
        <>
           <figure className="project-card">
            
            <img src="project-img" alt="project illusr" />
            <figcaption>
               <h3>Project Title</h3>
            </figcaption>
            <ul className="card-list">
                <li>Skill</li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum?</p>
            <button>Link</button> 
            </figure>
            <button>add new project</button>  
        </>
    )
}

export default Projects