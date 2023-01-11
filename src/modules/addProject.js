import Project from "./project"
import { checkProjectName } from "./checkProjectName"
const projectName = document.querySelector('.project-name')

const addProject = (target) =>{
  if (checkProjectName(projectName.value) === true) {
    return
  } else {
    const newProject = Project(projectName.value)
    target.push(newProject)
  }
  
}

export {addProject}