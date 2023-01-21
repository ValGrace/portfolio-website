import React, {useState, useRef} from "react";

const ProjectsForm = () => {
  const [title, setTitle] = useState('')
  const [skill, setSkill] = useState('')
  const [descr, setDescr] = useState('descr')
  const photoRef = useRef(null)

  const newProject = (event) => {
     event.preventDefault()
     setTitle('')
     setSkill('')
     setDescr('')
  }
    return (
        <form onSubmit={newProject}>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="photo" value={skill} ref={photoRef} /> 
          <input type="text" name="skills" value={skill} onChange={(e) => setSkill(e.target.value)}/>
          <input type="text" name="descr" value={descr} onChange={(e) => setDescr(e.target.value)}/>
          <button type="submit">add project</button>
        </form>
    )
}

export default ProjectsForm