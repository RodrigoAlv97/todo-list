import './style.css';
import { Task } from "./modules/task";
import { Project } from "./modules/project";
import { pageLoader } from "./modules/ui";



const def = Project('Default');
const test = Task ('testName' , 'testDesc' , 'testDate' , 'testPrio');
const test2 = Task ('testName2' , 'testDesc2' , 'testDate2' , 'testPrio2');
def.addTask(test);
def.addTask(test2)
console.log(def.getList());

pageLoader();