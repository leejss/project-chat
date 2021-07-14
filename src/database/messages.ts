import firebase from "../firebase";
import { IUser } from "../types";

export const messagesRef = firebase.database().ref("messages");

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

export const saveImgMessage = (
  image: string,
  projectId: string,
  user: IUser
) => {
  messagesRef
    .child(projectId)
    .push()
    .set({
      image,
      sendBy: user,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    })
    .then(() => {
      console.log("image message saved");
    })
    .catch((err) => {
      console.error(err);
    });
};
