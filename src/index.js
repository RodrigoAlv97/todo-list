import './styles/styles.css';
import Todo from "./modules/todo";
import Project from './modules/project';
import loadProjects from './modules/loadProjectList';

const projectList = [];
const defaultProject = Project('default');
projectList.push(defaultProject);
const currentProject = defaultProject;
const todo1 = Todo('x', 'y', 'z', '11')
const todo2 = Todo('xx', 'yy', 'zz', '1111')
currentProject.addTodo(todo1);
currentProject.addTodo(todo2);

loadProjects(projectList);


export {currentProject}