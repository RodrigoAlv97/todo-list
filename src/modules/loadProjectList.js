import { selectCurrentProject } from "./selectCurrent";
import { showCurrentList } from "./showCurrentList";
import { currentProject } from "..";

const projectList = document.querySelector('.side-bot');
const todoList = document.querySelector('.main-bot');

const loadProjects = (arr) => {
  arr.forEach(element => {
    const project = document.createElement('div');
    project.textContent = element.name;
    project.addEventListener('click' , () => {
      selectCurrentProject(currentProject , element)
      showCurrentList(currentProject.list , todoList)
    })
    projectList.appendChild(project)
  });
}

export default loadProjects