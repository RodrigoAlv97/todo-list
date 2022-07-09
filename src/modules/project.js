import { taskLoader } from "./ui";


const Project = (name) =>{

    const getName = () => name;

    let projectList = [];

    const addTask = task =>{
        projectList.push(task);
    }

    const getList = () => projectList;


    return {getName , getList , addTask}
    
}

const ProjectList = (function() {
    const list = [];

    const addProject = (value) => {
        list.push(value);
    };

    return {list , addProject}

})();

const CurrentProject = (function() {
    let current = ""

    const setCurrent = (value) =>{

        current = value

    }

    const getCurrent = () =>{
        return current
    }

    return {getCurrent , setCurrent}

})();

function taskDone() {
    const card = document.querySelector('.card');
    let value = card.getAttribute("data");
    
    ProjectList.list.forEach(element =>{
        if (element.getName() == CurrentProject.getCurrent().getName()) {
            console.log(element.getList());
            element.getList().splice(value , 1);
            console.log(element.getList());
            taskLoader();

        }
    });
}

export {Project , ProjectList , CurrentProject , taskDone}