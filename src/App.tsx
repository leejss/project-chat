import React, { useEffect } from "react";
import type { FC } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./modules/user";

const App: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.displayName && user.photoURL) {
          dispatch(
            setCurrentUser({
              name: user.displayName,
              uid: user.uid,
              avatar: user.photoURL,
            })
          );
          history.push("/");
        } else {
          console.error("displayName and photoURL are not set");
        }
      } else {
        history.replace("/login");
      }
    });
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
};

export default App;
