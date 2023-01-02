import { projectList } from "..";

export const deleteProject = (index) => {
  if (index > -1) {
    projectList.splice(index, 1); 
  }
}


