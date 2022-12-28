const Project = (name) => {
  let list = []

  const addTodo = (todo) => {
    list.push(todo)
  }

  return { name, list, addTodo }
}

export default Project