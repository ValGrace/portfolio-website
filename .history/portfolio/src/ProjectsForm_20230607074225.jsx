import React, {useState, useRef} from "react";
import "./UploadPhoto.css"
import { BsFillCameraFill} from 'react-icons/bs'
const ProjectsForm = () => {
  const [title, setTitle] = useState('')
  const [skill, setSkill] = useState('')
  const [descr, setDescr] = useState('descr')
  const [livelink, setLivelink] = useState('')
  const [gitlink, setGitlink] = useState('')
  const [problem, setProblem] = useState('')
  const [solution, setSolution] = useState('') 
   
  const photoRef = useRef()
  const secRef =useRef()
 
  const SelectedPhoto = async (event) => {
    let reader = new FileReader()
    reader.onload = function () {
       photoRef.current.src = reader.result
    }       
        if (event.target.files[0]){
          // reader.readAsDataURL(event.target.files[0])
        reader.readAsDataURL(event.target.files[0])
        }      
    
  } 
  const SelectedSecPhoto = async (event) => {
    let reader = new FileReader()
    reader.onload = function () {
       secRef.current.src = reader.result
    }       
        if (event.target.files[0]){
          // reader.readAsDataURL(event.target.files[0])
        reader.readAsDataURL(event.target.files[0])
        }      
    
  }  
    return (
        <form method="post" action="/projects/" encType="multipart/form-data" id="project-form">
          <div className="imageContainer">
          <img src="" className="Image" alt="profile" ref={photoRef} />
          <label htmlFor="inputFile">
          <BsFillCameraFill color='rgb(250, 0, 104)' size='2em' opacity='0.7' />  
          <input type="file" name="photo" id="inputFile" onChange={SelectedPhoto} accept="image/*" />
          </label> 
          </div>
          <input type="text" name="livelink" value={livelink} onChange={e => setLivelink(e.target.value)} />
          <input type="text" name="gitlink" value={gitlink} onChange={e => setGitlink(e.target.value)} />  
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} /> 
          <input type="text" name="descr" value={descr} onChange={e => setDescr(e.target.value)}/>
          <div className="imageContainer">
          <img src="" className="Image" alt="profile" ref={secRef} />
          <label htmlFor="inputFile">
          <BsFillCameraFill color='rgb(250, 0, 104)' size='2em' opacity='0.7' />  
          <input type="file" name="secphoto" id="inputFile" onChange={SelectedSecPhoto} accept="image/*" />
          </label> 
          </div>
          <input type="text" name="problem" value={problem} onChange={e => setProblem(e.target.value)} /> 
          <input type="text" name="solution" value={solution} onChange={e => setSolution(e.target.value)} />     
          <input type="text" name="skills" value={skill} onChange={e => setSkill(e.target.value)}/>
          
          <input type="submit" value="add project" id="project-btn"/>
        </form>
    )
}

export default ProjectsForm



 // const newProject = async event => {
  //    event.preventDefault()
  //    const response = await fetch("http://localhost:8080/ ", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({title: title, photo: projectPhoto, skill: skill, descr: descr})
  //    })
     
  //    return response
  // }