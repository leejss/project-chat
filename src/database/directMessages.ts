import firebase from "../firebase";
import { IUser } from "../types";

export const directMessagesRef = firebase.database().ref("directMessages");

export const saveDirectMessage = (
  content: string,
  userId: string,
  user: IUser
) => {
  directMessagesRef
    .child(userId)
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

export const saveDirectImgMessage = (
  image: string,
  userId: string,
  user: IUser
) => {
  directMessagesRef
    .child(userId)
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
