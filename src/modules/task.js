import { CurrentProject, ProjectList } from "./project";

const Task = (name , description , dueDate , priority) => {

    return {name , description , dueDate , priority}
}

function addTask() {

    const iName = document.querySelector('#inputName');
    const iDate = document.querySelector('#inputDate');
    const iDesc = document.querySelector('#inputDesc');
    const iPrio = document.querySelector('#inputPrio');
    const iPro = document.querySelector('#inputProjects');


    const name = iName.value;
    const date = iDate.value;
    const desc = iDesc.value;
    const prio = iPrio.value; 
    const pro = iPro.value;
    if (name!== "" || date !== "" ) {
        const task = Task(name , desc , date , prio);

        ProjectList.list.forEach(element => {
            if (element.getName() == pro) {
                element.addTask(task);
            }      
        });
    } else {
        console.log('inset Name and date');
    }
  

}


export {Task , addTask}