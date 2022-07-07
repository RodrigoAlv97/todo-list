import './style.css';
import { Task } from "./modules/task";
import { Project , ProjectList , CurrentProject} from "./modules/project";
import { uiLoader } from "./modules/ui";



const def = Project('Default');
const def2 = Project('Default2');
const test = Task ('testName' , 'testDesc' , 'testDate' , 'testPrio');
const test2 = Task ('testName2' , 'testDesc2' , 'testDate2' , 'testPrio2');
def.addTask(test);
def.addTask(test2)
console.log(def.getList());



ProjectList.addProject(def);
ProjectList.addProject(def2);

console.log(ProjectList.list);

CurrentProject.setCurrent(def);
console.log('current= ' + CurrentProject.getCurrent());
CurrentProject.setCurrent(def2);
console.log('current= ' + CurrentProject.getCurrent());

uiLoader();

export {def}