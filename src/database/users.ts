import firebase from "../firebase";

export const usersRef = firebase.database().ref("users");

export const saveUser = (credential: firebase.auth.UserCredential) => {
  if (credential.user) {
    usersRef
      .child(credential.user.uid)
      .set({
        name: credential.user.displayName,
        avatar: credential.user.photoURL,
      })
      .then(() => {
        console.log("New user saved to database");
      })
      .catch((err) => {
        console.error("save user failed", err);
      });
  } else {
    return;
  }
};
