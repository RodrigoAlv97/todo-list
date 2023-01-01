import './styles/styles.css';
import loadProjects from './modules/loadProjectList';
import { toggleElement } from './modules/toggleElement';
import { addProject } from './modules/addProject';
import { clearProjectForm } from './modules/clearProjectForm';

const showProjectForm = document.querySelector('.add-project')
const projectForm = document.querySelector('#project-form');
const addProjectButton = document.querySelector('.add-project-button')

const projectList = [];

loadProjects(projectList);

showProjectForm.addEventListener('click', () => {
  clearProjectForm()
  toggleElement(projectForm)

});
addProjectButton.addEventListener('click', () => {
  addProject(projectList)
  clearProjectForm()
  loadProjects(projectList)
})


export { projectList }