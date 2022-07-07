const Task = (name , desciption , dueDate , priority) => {

    const getName = () => name;
    const getDescription = () => desciption;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;


    return {getName , getDescription , getDueDate , getPriority}

}

export {Task}