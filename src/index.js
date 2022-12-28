import styles from './styles/styles.css';
import Todo from "./modules/todo";
import Project from './modules/project';

const projectList = [];
const defaultProject = Project('default');
projectList.push(defaultProject);
const currentProject = defaultProject;
