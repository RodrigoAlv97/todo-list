
import Todo from "./todo"
import { projectList } from ".."

const title = document.querySelector('.input-todo-title')

const desc = document.querySelector('.input-todo-desc')

const date = document.querySelector('.input-todo-date')

const priority = document.querySelector('.priority-selector')

const projectName = document.querySelector('.project-selector')


export const addTodo = () => {

  const newTodo = Todo(title.value, desc.value, date.value, priority.value )
 
  projectList.forEach(project => {
    if (project.name === projectName.value) {
      console.log(project)
      project.addTodo(newTodo)
    }
  })
}
