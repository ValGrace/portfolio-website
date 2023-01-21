import React from "react";

const ProjectsForm = () => {
    return (
        <form>
          <input type="text" name="title" value="title" />
          <input type="text" name="photo" value="photo" /> 
          <input type="text" name="skills" value="skills" />
          <input type="text" name="descr" value="descr" />
          <button>add project</button>
        </form>
    )
}

export default ProjectsForm