const projectList = document.querySelector('.side-bot');

const loadProjects = (arr) => {
  arr.forEach(element => {
    const project = document.createElement('div');
    project.textContent = element.name;
    projectList.appendChild(project)
  });
}

export default loadProjects