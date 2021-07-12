import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHYTb-9IbWnlLeM8odlrVD-otpYZISoag",
  authDomain: "react-slack-156cc.firebaseapp.com",
  databaseURL:
    "https://react-slack-156cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-slack-156cc",
  storageBucket: "react-slack-156cc.appspot.com",
  messagingSenderId: "65585034654",
  appId: "1:65585034654:web:1781cdc703e9f8880f128f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
