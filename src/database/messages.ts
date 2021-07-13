import firebase from "../firebase";
import { IProject, IUser } from "../types";

const messagesRef = firebase.database().ref("messages");

export const saveMessage = (
  content: string,
  projectId: string,
  user: IUser
) => {
  messagesRef
    .child(projectId)
    .push()
    .set({
      content,
      sendBy: user,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    })
    .then(() => {
      console.log("message saved");
    })
    .catch((err) => {
      console.error(err);
    });
};

/*
    projectKey
        - messageKey
            - content: string
            - sendBy: User
            - timestamp

*/