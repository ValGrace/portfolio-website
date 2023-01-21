import React, {useState, useRef} from "react";

const ProjectsForm = () => {
  const [title, setTitle] = useState('')
  const [skill, setSkill] = useState('')
  const [descr, setDescr] = useState('descr')
  const [photo] = useState('')
  const photoRef = useRef(null)

  const newProject = async event => {
     event.preventDefault()
     const response = await fetch("http://localhost:8080/ ", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: title, photo: photo, skill: skill, descr: descr})
     })
     
     return response
  }

  const selectedPhoto = (event) => {
    let reader = new FileReader()
    reader.onload = function () {
       photoRef.current.src = reader.result
    }
    if (event.target.files[0]){
      reader.readAsDataURL(event.target.files[0])
    }
  } 
    return (
        <form method="post" action="/projects" encType="multipart/form-data" id="project-form">
          <img src="" className="Image" alt="profile" ref={photoRef} />
          <input type="file" name="photo" value={photo} onChange={selectedPhoto}/> 
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />          
          <input type="text" name="skills" value={skill} onChange={e => setSkill(e.target.value)}/>
          <input type="text" name="descr" value={descr} onChange={e => setDescr(e.target.value)}/>
          <input type="submit" onClick={newProject} value="add project" />
        </form>
    )
}

export default ProjectsForm