import './styles/styles.css';
import Todo from "./modules/todo";
import Project from './modules/project';
import loadProjects from './modules/loadProjectList';

const projectList = [];
const defaultProject = Project('default');
projectList.push(defaultProject);
const currentProject = defaultProject;

loadProjects(projectList);