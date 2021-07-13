import React, { FormEvent, useState } from "react";
import type { FC } from "react";
import AuthForm from "./AuthForm";
import { IUserInput } from "../../types";
import firebase from "../../firebase";

const defaultLoginInput = {
  email: "",
  password: "",
};

const LoginContainer: FC = () => {
  const [loginInput, setLoginInput] = useState<IUserInput>(defaultLoginInput);
  const [errors, setErrors] = useState<string[] | []>([]);

  const validForm = () => {
    // validation check
    return true;
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(loginInput.email, loginInput.password)
      .then()
      .catch((err) => {
        console.error(err);
        setErrors((prev) => [err.message, ...prev]);
      });
  };
  return <AuthForm type="login" user={loginInput} errors={errors} />;
};

export default LoginContainer;
