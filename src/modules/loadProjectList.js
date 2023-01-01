import { showCurrentList } from "./showCurrentList";

const projectList = document.querySelector('.side-bot');
const todoList = document.querySelector('.main-bot');

const loadProjects = (arr) => {
  projectList.replaceChildren ()
  arr.forEach((element , index) => {
    const project = document.createElement('div');
    project.textContent = element.name;
    project.setAttribute('data' , `${index}`)
    project.addEventListener('click' , () => {
      showCurrentList(element.list , todoList)
    })
    projectList.appendChild(project)
  });
}

export default loadProjects