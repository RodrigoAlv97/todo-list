import Project from "./project"
const projectName = document.querySelector('.project-name')

const addProject = (target) =>{
  const newProject = Project(projectName.value)
  target.push(newProject)
}

export {addProject}