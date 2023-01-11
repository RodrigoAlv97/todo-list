import { projectList } from ".."

export const checkProjectName = (name) => {
  let res = false;
  projectList.forEach(element => {
    
    if (element.name === name) {
     res = true 
    }
  });
  return res
}