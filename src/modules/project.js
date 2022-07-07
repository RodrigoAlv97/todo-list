const Project = (name) =>{

    const getName = () => name;

    let projectList = [];

    const addTask = task =>{
        projectList.push(task);
    }

    const getList = () => projectList;


    return {getName , getList , addTask}
    
}

export {Project}