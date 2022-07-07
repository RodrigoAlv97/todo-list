

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

export {Project , ProjectList , CurrentProject}