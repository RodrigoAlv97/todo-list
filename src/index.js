import './styles/styles.css';
import loadProjects from './modules/loadProjectList';
import { hideElement, showElement } from './modules/toggleElement';
import { addProject } from './modules/addProject';
import { clearProjectForm } from './modules/clearProjectForm';
import { fillProjectSelector } from './modules/fillProjectSelector';
import { addTodo } from './modules/addTodo';
import { clearTodoForm } from './modules/clearTodoForm';

const todoForm = document.querySelector('#todo-form-container')
const addProjectButton = document.querySelector('.add-project-button')
const addTodoButton = document.querySelector('.add-todo')
const cancelTodoForm = document.querySelector('.todo-form-btn-cancel')
const addTodoForm = document.querySelector('.todo-form-btn-add')

const projectList = [];

addProjectButton.addEventListener('click', () => {
  addProject(projectList)
  clearProjectForm()
  loadProjects(projectList) 
})

addTodoButton.addEventListener('click' , () => {
    fillProjectSelector(projectList)
    showElement(todoForm , 'block')
})

addTodoForm.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo()
  hideElement(todoForm)
  clearTodoForm()
})

cancelTodoForm.addEventListener('click', (e) => {
  e.preventDefault();
  hideElement(todoForm)
  clearTodoForm()
})

export { projectList }