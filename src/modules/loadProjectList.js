import { deleteProject } from "./deleteProject";
import { showCurrentList } from "./showCurrentList";

const projectList = document.querySelector('.side-bot');
const todoList = document.querySelector('.main-bot');

const loadProjects = (arr) => {
  projectList.replaceChildren ()
  arr.forEach((element , index) => {
    const project = document.createElement('div');
    const projectName = document.createElement('div')
    projectName.textContent = element.name;
    projectName.setAttribute('class' , 'project-list-name')
    project.setAttribute('data' , `${index}`)
    project.setAttribute('class' , 'project-list-item')
    projectName.addEventListener('click' , () => {
      showCurrentList(element.list , todoList)
    })
    const btn = document.createElement('button')
    btn.setAttribute('class' , 'project-list-btn')
    btn.textContent = 'x'
    btn.addEventListener('click' , () => {
      deleteProject(index)
      loadProjects(arr)
    })
    project.appendChild(projectName)
    project.appendChild(btn)
    
    projectList.appendChild(project)
  });
}

export default loadProjects