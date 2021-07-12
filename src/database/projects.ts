import firebase from "../firebase";
import { IProject, IProjectInput, IUser } from "../types";

export const projectsRef = firebase.database().ref("projects");


export const addProject = (projectInput: IProjectInput, user: IUser) => {
  const newProject: IProject = {
    ...projectInput,
    id: projectsRef.push().key!,
    createdBy: user,
  };
  projectsRef
    .child(newProject.id)
    .set(newProject)
    .then(() => {
      console.log("Project Added");
    })
    .catch((err) => {
      console.error(err);
    });
};
